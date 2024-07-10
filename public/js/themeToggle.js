document.addEventListener("DOMContentLoaded", function() {
    const body = document.body;
    body.classList.add('fade-up', 'show');

    const toggleButton = document.querySelector('.toggleDarkMode');
    const darkModeIcon = '<i class="fa-solid fa-moon"></i>';  // Icono para modo oscuro
    const lightModeIcon = '<i class="fa-solid fa-sun"></i>';  // Icono para modo claro

    // Función para inicializar el modo según localStorage
    function initializeTheme() {
        const theme = localStorage.getItem('theme');
        if (theme === 'light-mode') {
            document.documentElement.classList.add('light-mode');
            toggleButton.innerHTML = darkModeIcon;
        } else {
            document.documentElement.classList.remove('light-mode');
            toggleButton.innerHTML = lightModeIcon;
        }
    }

    // Inicializar el tema al cargar la página
    initializeTheme();

    toggleButton.addEventListener('click', function() {
        document.documentElement.classList.toggle('light-mode');
        if (document.documentElement.classList.contains('light-mode')) {
            toggleButton.innerHTML = darkModeIcon;
            localStorage.setItem('theme', 'light-mode');
        } else {
            toggleButton.innerHTML = lightModeIcon;
            localStorage.setItem('theme', 'dark-mode');
        }
    });
});
