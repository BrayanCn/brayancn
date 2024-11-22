// Funcionalidad para cambiar entre temas
const toggleButton = document.getElementById("theme-toggle");

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const currentIcon = document.body.classList.contains("dark-mode") ? "🌙" : "☀️";
    toggleButton.textContent = currentIcon;
});
