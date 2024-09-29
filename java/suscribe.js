// Función para manejar la suscripción
document.getElementById('form-suscripcion').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    // Obtener suscriptores existentes
    let suscriptores = JSON.parse(localStorage.getItem('suscriptores')) || [];
    // Agregar nuevo suscriptor
    suscriptores.push(email);
    // Guardar de nuevo en localStorage
    localStorage.setItem('suscriptores', JSON.stringify(suscriptores));
    // Mostrar mensaje de éxito
    alert(`Gracias por suscribirte con el correo: ${email}`);
    // Limpiar el formulario
    this.reset();
});