'use strict';

const producto = document.getElementById('producto');
const productoImagen = producto.querySelector('.producto__imagen');
const thumbs = producto.querySelector('.producto__thumbs');
//COLORES
const propiedadColor = producto.querySelector('#propiedad-color');
//cantidad
const btnIncrementar = producto.querySelector('#incrementar-cantidad');
const btnDisminuir = producto.querySelector('#disminuir-cantidad');
const inputCantidad = producto.querySelector('#cantidad');

thumbs.addEventListener('click', (e) => {
    if(e.target.tagName === 'IMG');{
        const imagenSrc = e.target.src;
        const lastIndex = imagenSrc.lastIndexOf('/');
        const nombreImagen = imagenSrc.substring(lastIndex + 1);

        productoImagen.src =`./img/tennis/${nombreImagen}`;

    }

});

propiedadColor.addEventListener('click', (e) => {
    if(e.target.tagName === 'INPUT') {

        productoImagen.src = `./img/tennis/${e.target.value}.jpg`;
    }
});

btnIncrementar.addEventListener('click', (e) =>{
    inputCantidad.value = parseInt(inputCantidad.value) + 1;

});

btnDisminuir.addEventListener('click', (e) =>{
    if(parseInt(inputCantidad.value) > 1){
        inputCantidad.value = parseInt(inputCantidad.value) - 1;
    }
});

const botonesAbrir = document.querySelectorAll('[data-accion="abrir-carrito"]');
const botonesCerrar = document.querySelectorAll('[data-accion="cerrar-carrito"]');
const ventanaCarrito = document.getElementById('carrito');
const renderCarrito = () =>{
    ventanaCarrito.classList.add('carrito--active');

};

//
botonesAbrir.forEach((boton) =>{
    boton.addEventListener('click', (e) => {
        renderCarrito();
        

    });
});

botonesCerrar.forEach((boton) =>{
    boton.addEventListener('click', (e) => {
        ventanaCarrito.classList.remove('carrito--active');
    });
});
