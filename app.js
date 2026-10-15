function enviar() {
    var contenido = document.querySelector('#contenido');
    var v1 = document.querySelector('#t1').value;
    var v2 = document.querySelector('#t2').value;
    var v3 = document.querySelector('#t3').value;
    var url = "";

    if (document.querySelector('#opcion1').checked)
        url = 'http://127.0.0.1:5000';
    else if (document.querySelector('#opcion2').checked)
        url = 'http://127.0.0.1:5000/notas/' + v1 + '/' + v2 + '/' + v3;
    else if (document.querySelector('#opcion3').checked)
        url = 'http://127.0.0.1:5000/edades/' + v1;
    else if (document.querySelector('#opcion4').checked)
        url = 'http://127.0.0.1:5000/arreglos/' + v1 + '/' + v2 + '/' + v3;
    else
        swal("Mensaje", "Seleccione una opción", "warning");

    fetch(url)
        .then(function(response) {
            if (response.ok) {
                return response.text();
            } else {
                throw "Error en la llamada";
            }
        })
        .then(function(texto) {
            contenido.innerHTML = texto;
        })
        .catch(function(error) {
            swal({
                title: "Advertencia",
                text: error,
                icon: "warning",
                dangerMode: true,
            });
        });
}

function opcion1() {
    let t1 = document.querySelector('#t1'), t2 = document.querySelector('#t2'), t3 = document.querySelector('#t3');
    t1.disabled = t2.disabled = t3.disabled = true;
    t1.value = t2.value = t3.value = "";
}

function opcion2() {
    let t1 = document.querySelector('#t1'), t2 = document.querySelector('#t2'), t3 = document.querySelector('#t3');
    t1.disabled = t2.disabled = t3.disabled = false;
    t1.value = t2.value = t3.value = "";
    t1.placeholder = "Nota 1"; t2.placeholder = "Nota 2"; t3.placeholder = "Nota 3";
}

function opcion3() {
    let t1 = document.querySelector('#t1'), t2 = document.querySelector('#t2'), t3 = document.querySelector('#t3');
    t1.disabled = false; t2.disabled = t3.disabled = true;
    t1.value = t2.value = t3.value = "";
    t1.placeholder = "Edad";
}

function opcion4() {
    let t1 = document.querySelector('#t1'), t2 = document.querySelector('#t2'), t3 = document.querySelector('#t3');
    t1.disabled = t2.disabled = t3.disabled = false;
    t1.value = t2.value = t3.value = "";
    t1.placeholder = "Valores"; t2.placeholder = "Columnas"; t3.placeholder = "Filas";
}