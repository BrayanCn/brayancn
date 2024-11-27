// Funcionalidad para cambiar entre temas
const toggleButton = document.getElementById("theme-toggle");

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    
    // Cambiar el ícono del botón según el estado actual
    const currentIcon = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
    toggleButton.textContent = currentIcon;
});


document.querySelector('.hamburger').addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});


function showAlert(type) {
    // Crear el div de la alerta
    var alertBox = document.createElement("div");
    alertBox.id = "customAlert";

    // Definir el contenido de la alerta según el tipo
    if (type === 'Code') {
        alertBox.innerHTML = `
            <p>Para obtener el código de este proyecto, por favor, contacta por correo o redes.</p>
            <button onclick="closeAlert()">Cerrar</button>
        `;
    } else {
        alertBox.innerHTML = `
            <p>¡Acción no definida!</p>
            <button onclick="closeAlert()">Cerrar</button>
        `;
    }

    // Agregar el div al body
    document.body.appendChild(alertBox);

    // Mostrar la alerta
    alertBox.style.display = "block";
}

// Función para cerrar la alerta
function closeAlert() {
    // Obtener el div de la alerta
    var alertBox = document.getElementById("customAlert");

    // Ocultar la alerta
    alertBox.style.display = "none";

    // Opcional: Eliminar el div del DOM después de ocultarlo (esto es para limpiar el DOM)
    setTimeout(function() {
        alertBox.remove();
    }, 300);  // Un pequeño delay para dar tiempo a que se oculte antes de eliminar
}

