// script.js

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Ruta al archivo JSON
    const url = 'frutas_y_verduras.json';

    // Fetch para obtener los datos JSON
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            mostrarAlimentos(data.alimentos);
        })
        .catch(error => {
            console.error('Error al cargar el archivo JSON:', error);
            document.getElementById('lista-alimentos').innerHTML = '<p>Error al cargar los datos.</p>';
        });

    // Función para mostrar los alimentos en el HTML
    function mostrarAlimentos(alimentos) {
        const lista = document.getElementById('lista-alimentos');

        alimentos.forEach(alimento => {
            // Crear elementos HTML
            const divAlimento = document.createElement('div');
            divAlimento.classList.add('alimento');

            const img = document.createElement('img');
            img.src = alimento.imagen;
            img.alt = alimento.nombre;

            const divDetails = document.createElement('div');
            divDetails.classList.add('alimento-details');

            const nombre = document.createElement('h2');
            nombre.textContent = alimento.nombre;

            const descripcion = document.createElement('p');
            descripcion.textContent = alimento.descripcion;

            const infoNutritiva = document.createElement('ul');
            infoNutritiva.innerHTML = `
                <li><strong>Calorías:</strong> ${alimento.valores_nutritivos.calorias} kcal</li>
                <li><strong>Azúcares:</strong> ${alimento.valores_nutritivos.azucares} g</li>
                <li><strong>Carbohidratos:</strong> ${alimento.valores_nutritivos.carbohidratos} g</li>
                <li><strong>Proteínas:</strong> ${alimento.valores_nutritivos.proteinas} g</li>
            `;

            // Agregar elementos al DOM
            divDetails.appendChild(nombre);
            divDetails.appendChild(descripcion);
            divDetails.appendChild(infoNutritiva);

            divAlimento.appendChild(img);
            divAlimento.appendChild(divDetails);

            lista.appendChild(divAlimento);
        });
    }
});
