let cantidad = 0;



const cantidades = document.getElementById("cantidades");
function sumar() {
    cantidades.firstChild.nodeValue = ++cantidad;
}

const aumentar = document.getElementById("aumentar");
aumentar.addEventListener("click", sumar, false)

function restar() {
    cantidades.firstChild.nodeValue = --cantidad;
}

const disminuir = document.getElementById('disminuir');
disminuir.addEventListener('click', restar, false)

