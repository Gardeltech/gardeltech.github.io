let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
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
                carrito.splice(index, 1);
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
        actualizarCarrito();
        

      