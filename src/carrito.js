const botonesAbrir = document.querySelectorAll('[data-accion="abrir-carrito"]');
const botonesCerrar = document.querySelectorAll('[data-accion="cerrar-carrito"]');
const ventanaCarrito = document.getElementById('carrito');
const renderCarrito = () =>{
    ventanaCarrito.classList.add('carrito--active');

}

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