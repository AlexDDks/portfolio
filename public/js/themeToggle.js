document.addEventListener("DOMContentLoaded", function() {
    const body = document.body;
    body.classList.add('fade-up', 'show');

    const toggleButton = document.querySelector('.toggleDarkMode');
    const darkModeIcon = '<i class="fa-solid fa-moon"></i>';  // Icono para modo oscuro
    const lightModeIcon = '<i class="fa-solid fa-sun"></i>';  // Icono para modo claro

    // Inicializar el icono según el modo actual
    if (document.documentElement.classList.contains('light-mode')) {
        toggleButton.innerHTML = darkModeIcon;
    } else {
        toggleButton.innerHTML = lightModeIcon;
    }

    toggleButton.addEventListener('click', function() {
        document.documentElement.classList.toggle('light-mode');
        if (document.documentElement.classList.contains('light-mode')) {
            toggleButton.innerHTML = darkModeIcon;
        } else {
            toggleButton.innerHTML = lightModeIcon;
        }
    });
});
