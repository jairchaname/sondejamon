let pagina = 1;




document.addEventListener('DOMContentLoaded', function() {
    iniciarApp();
});

function iniciarApp() {
    mostrarProductos();

    //Resalta el Div actual segun el tab al que se presiona
    mostrarSeccion();

    //Oculta o muestra una sección según el tab al que se presiona
    cambiarSeccion();

    //Paginación siguiente y anterior
    paginaSiguiente();

    paginaAnterior();

    //Comprueba la página actual para ocultar o mostrar la paginación
    botonesPaginador();

}

function mostrarSeccion() {

    //Eliminar mostrar-seccion de la sección anterior
    const seccionAnterior = document.querySelector('.mostrar-seccion');

    if (seccionAnterior) {
        seccionAnterior.classList.remove('mostrar-seccion');
    }
    

    const seccionActual = document.querySelector(`#paso-${pagina}`);
    seccionActual.classList.add('mostrar-seccion');

    //Eliminar .actual de la sección anterior
    const tabAnterior =  document.querySelector('.tabs .actual');

    if (tabAnterior) {
        tabAnterior.classList.remove('actual');
    }
   

    //Resalta el tab actual
    const tab = document.querySelector(`[data-paso="${pagina}"]`);
    tab.classList.add('actual');
}

function cambiarSeccion() {
    const enlaces = document.querySelectorAll('.tabs button');

    enlaces.forEach( enlace => {
        enlace.addEventListener('click', e => {
            e.preventDefault();
            pagina = parseInt(e.target.dataset.paso);

            // Llamar la función de mostrarSeccion()
            mostrarSeccion();

            botonesPaginador();
        })
    })
}


//Mostrar Productos seccion productos
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

function paginaSiguiente() {
   const paginaSiguiente = document.querySelector('#siguiente');
   paginaSiguiente.addEventListener('click', e => {
       pagina++

       console.log(pagina);

       botonesPaginador();
   })
}

function paginaAnterior() {
    const paginaAnterior = document.querySelector('#anterior');
    paginaAnterior.addEventListener('click', e => {
        pagina--;

        console.log(pagina);

        botonesPaginador();
    })
}

function botonesPaginador() {
    const paginaSiguiente = document.querySelector('#siguiente');
    const paginaAnterior = document.querySelector('#anterior');

    if(pagina === 1) {
        paginaAnterior.classList.add('ocultar');
        paginaSiguiente.classList.remove('ocultar');
    } else if (pagina === 4) {
        paginaSiguiente.classList.add('ocultar');
        paginaAnterior.classList.remove('ocultar');
    } else {
        paginaSiguiente.classList.remove('ocultar');
        paginaAnterior.classList.remove('ocultar');
    }

    mostrarSeccion(); // Cambia la sección que se muestra
}


//Aumentar y disminuir cantidades de Productos
const cantidadProductos = document.querySelector('.cantidades');
const aumentarProductos = document.querySelector('.aumentar');
const disminuirProductos = document.querySelector('.disminuir');

