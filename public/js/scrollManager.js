document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.ulProjects li a');

    function setActiveLink() {
        let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        let foundActive = false;

        links.forEach(link => {
            let targetId = link.getAttribute('href').split('#')[1];
            let targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Activar la sección cuando su parte superior entre en el tercio superior de la ventana
                let offsetToActivate = window.innerHeight / 3;
                let sectionTop = targetSection.offsetTop;

                if (scrollPosition + offsetToActivate >= sectionTop) {
                    links.forEach(lnk => lnk.classList.remove('active'));
                    link.classList.add('active');
                    foundActive = true;
                }
            }
        });

        // Si ninguna sección ha sido activada, activar la primera por defecto
        if (!foundActive) {
            links.forEach(lnk => lnk.classList.remove('active'));
            links[0].classList.add('active');
        }
    }

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            let targetId = this.getAttribute('href').split('#')[1];
            let targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: 'smooth'
                });
                setActiveLink();
            }
        });
    });

    window.addEventListener('scroll', setActiveLink);

    // Activar el primer enlace (article1) por defecto al cargar la página
    setActiveLink();
});
