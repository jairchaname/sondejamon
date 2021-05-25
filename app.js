/* let pagina = 1;

const producto = {
    nombre: '',
    productos: []
} */


document.addEventListener('DOMContentLoaded', function() {
    iniciarApp();
});

function iniciarApp() {
    mostrarProductos();
}

async function mostrarProductos() {
    try {
        const resultado = await fetch('./api.json');
        const db = await resultado.json();

        const { productos } = db;

        //Generar el HTML
        productos.forEach( producto => {
            const { id, nombre, precio, imagen } = producto;

            //DOM Scripting

            //Generar Imagen
            const imagenProducto = document.createElement('IMG');
            imagenProducto.src = imagen;


            //Generar el nombre del producto
            const nombreProducto = document.createElement('H4');
            nombreProducto.textContent = nombre;
            nombreProducto.classList.add('nombre-producto')

            // Generar el precio del producto
            const precioProducto = document.createElement('P');
            precioProducto.textContent = `S/ ${precio}`;
            precioProducto.classList.add('precio-producto')

            //Generar cantidades
            const disminuirProducto = document.createElement('I');
            disminuirProducto.classList.add('fas');
            disminuirProducto.classList.add('fa-minus');

            //Generar div disminuir
            const disminuirDiv = document.createElement('DIV');
            disminuirDiv.classList.add('icono');
            disminuirDiv.classList.add('hover');
            disminuirDiv.classList.add('disminuir');

            //Inyectar disminuir
            disminuirDiv.appendChild(disminuirProducto);

            const cantidades = document.createElement('P');
            cantidades.textContent = 0;
            cantidades.classList.add('cantidades');

            const aumentarPorducto = document.createElement('I');
            aumentarPorducto.classList.add('fas');
            aumentarPorducto.classList.add('fa-plus');

             //Generar div aumenatr
             const aumentarDiv = document.createElement('DIV');
             aumentarDiv.classList.add('icono');
             aumentarDiv.classList.add('hover');
             aumentarDiv.classList.add('disminuir');
 
             //Inyectar disminuir
             aumentarDiv.appendChild(aumentarPorducto);

            //Generar div para cantidades
            const cantidadesDiv = document.createElement('DIV');
            cantidadesDiv.classList.add('cantidad');

            //Inyectar cantidades 
            cantidadesDiv.appendChild(disminuirDiv);
            cantidadesDiv.appendChild(cantidades);
            cantidadesDiv.appendChild(aumentarDiv);

            // Generar div contenedor de productos
            const productoDiv = document.createElement('DIV');
            productoDiv.classList.add('producto');
            
            //Generar div contenido del producto
            const contenidoProductoDiv = document.createElement('DIV');
            contenidoProductoDiv.classList.add('producto-contenido');

            //Inyectar contenido del producto
            contenidoProductoDiv.appendChild(nombreProducto);
            contenidoProductoDiv.appendChild(precioProducto);
            contenidoProductoDiv.appendChild(cantidadesDiv);

            //Inyectar el precio y nombre al div de producto
            productoDiv.appendChild(imagenProducto);
            productoDiv.appendChild(contenidoProductoDiv);

            //Inyectarlo en el HTML
            document.querySelector('#productos').appendChild(productoDiv);

        })

    } catch (error) {
        console.log(error);
    }
}


//Aumentar y disminuir cantidades de Productos
const cantidadesProductos = document.querySelector('.cantidades');
const aumentarProductos = document.querySelector('.aumentar');
const disminuirProductos = document.querySelector('.disminuir');




/* const cantidades = document.querySelectorAll(".cantidades");
function sumar() {
    cantidades.firstChild.nodeValue = ++cantidad;
}

const aumentar = document.querySelectorAll(".aumentar");
aumentar.addEventListener("click", sumar, false)

function restar() {
    cantidades.firstChild.nodeValue = --cantidad;
}

const disminuir = document.querySelectorAll('.disminuir');
disminuir.addEventListener('click', restar, false)
 */

/* 
//añadir clase
if(cantidades <= 0) {
    cantidades.classList('cero')
} 

const requireURL = '' */