document.addEventListener('DOMContentLoaded', function() {
      
    // Inicializar el carrito y el total en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));
    localStorage.setItem('total', total);
    actualizarCarrito();


    // Agregar evento de click al botón de agregar producto al carrito
    const agregarProductoBtn = document.getElementById('agregar-producto');
    agregarProductoBtn.addEventListener('click', () => {
        const productoInput = document.getElementById('producto-input');
        const precioInput = document.getElementById('precio-input');
        if (productoInput.value && precioInput.value) {
            agregarCarrito(productoInput.value, parseFloat(precioInput.value));
            productoInput.value = '';
            precioInput.value = '';
        }
    });
    
    // Agregar evento de click al botón de eliminar producto del carrito
    const eliminarProductoBtn = document.getElementById('eliminar-producto');
    eliminarProductoBtn.addEventListener('click', () => {
        const productoInput = document.getElementById('eliminar-input');
        if (productoInput.value) {
            eliminarCarrito(productoInput.value, parseFloat(document.getElementById('eliminar-precio').value));
            productoInput.value = '';
            document.getElementById('eliminar-precio').value = '';
        }
    });
    
    // Agregar evento de click al botón de vaciar carrito
    const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
    vaciarCarritoBtn.addEventListener('click', () => {
        carrito = [];
        total = 0;
        localStorage.setItem('carrito', JSON.stringify(carrito));
        localStorage.setItem('total', total);
        actualizarCarrito();
    });
    
    // Agregar evento de click al botón de calcular descuento
    const calcularDescuentoBtn = document.getElementById('calcular-descuento');
    calcularDescuentoBtn.addEventListener('click', () => {
        const descuentoInput = document.getElementById('descuento-input');
        if (descuentoInput.value) {
            const descuento = parseFloat(descuentoInput.value);
            total = total - (total * descuento / 100);
            localStorage.setItem('total', total);
    
        }
            actualizarCarrito();
            descuentoInput.value = '';
            document.getElementById('total-carrito').textContent = total.toFixed(2);
            document.getElementById('total-carrito').textContent = total.toFixed(2);
   
    
))};       

actualizarCarrito();




        
        
    
/*});*/
        
        /*let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        let total = parseFloat(localStorage.getItem('total')) || 0;

        // Función para agregar producto al carrito
        function agregarCarrito(producto, precio) {
            const index = carrito.findIndex(item => item.producto === producto);
            if (index > -1) {
                carrito[index].cantidad += 1;
            } else {
                carrito.push({ producto, precio, cantidad: 1 });
            }
            total += precio;
            actualizarCarrito();
        }

        // Función para eliminar producto del carrito
        function eliminarCarrito(producto, precio) {
            const index = carrito.findIndex(item => item.producto === producto);
            if (index > -1) {
                total -= carrito[index].precio * carrito[index].cantidad;
                carrito.splice(precio, index, 1);
                actualizarCarrito();
            }
        }

        // Función para actualizar el carrito en la interfaz y en localStorage
        function actualizarCarrito() {
            const listaCarrito = document.getElementById('lista-carrito');
            const totalCarrito = document.getElementById('total-carrito');
            listaCarrito.innerHTML = '';
            carrito.forEach(item => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <span>${item.producto} x${item.cantidad}</span>
                    <span>$${(item.precio * item.cantidad).toFixed(2)}</span>
                    <button class="eliminar" onclick="eliminarCarrito('${item.producto}', ${item.precio})">X</button>
                `;
                listaCarrito.appendChild(li);
            });
            totalCarrito.textContent = total.toFixed(2);
            // Guardar en localStorage
            localStorage.setItem('carrito', JSON.stringify(carrito));
            localStorage.setItem('total', total.toFixed(2));
        }
        // Evento para agregar producto al carrito
        document.getElementById('agregar-carrito').addEventListener('click', () => {
            const producto = document.getElementById('producto').value;
            const precio = parseFloat(document.getElementById('precio').value);
            if (isNaN(precio) || precio <= 0) {
                alert('Precio inválido');
                return;
            }
            agregarCarrito(producto, precio);
        });
        // Inicializar el carrito
        actualizarCarrito();*/