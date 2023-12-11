document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.ulProjects li a');

    // Establecer la clase 'active' en el primer enlace al cargar la página
    if (links.length > 0) {
        links[0].classList.add('active');
    }

    // Función para eliminar la clase 'active' de todos los enlaces y agregarla al enlace actual
    function setActiveLink(currentLink) {
        links.forEach(link => {
            link.classList.remove('active');
        });
        if (currentLink) {
            currentLink.classList.add('active');
        }
    }

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Previene el comportamiento por defecto del enlace
            let targetId = this.getAttribute('href').split('#')[1];
            let targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50, // Ajusta este valor si es necesario
                    behavior: 'smooth'
                });
                setActiveLink(this);
            }
        });
    });

    window.addEventListener('scroll', () => {
        let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        let currentLink = null;

        document.querySelectorAll('.contentArticle > section, .contentArticle > div').forEach((section) => {
            if (section.offsetTop - 50 <= scrollPosition && (section.offsetTop + section.offsetHeight - 50) > scrollPosition) { // Ajusta este valor si es necesario
                currentLink = document.querySelector('.ulProjects li a[href*=' + section.id + ']');
            }
        });

        setActiveLink(currentLink);
    });
});
