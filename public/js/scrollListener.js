document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("article");
    const navLinks = document.querySelectorAll("nav ul a");

        navLinks[0].firstChild.classList.add("active");
    
   
    function articleActive() {
        let current ="";// Ya que inicialmente añadimos una clase active por defecto, si scrolleamos esta se borra por la acción de todo el código por el addEventListener. Por lo tanto se establece por defecto el ID del primer artículo hasta que sea sustituido
        sections.forEach(section => {
            const sectionTop = section.offsetTop;// Obtener el offset superior
            const sectionHeight = section.clientHeight;// Calcula el alto del article
            if (window.scrollY >= (sectionTop - sectionHeight / 3)) {// condicional para obtener y guardar en current el id del article que se encuentra activo gracias al scroll
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.firstChild.classList.remove("active"); // Remuve la clase active de todos los li
            if (link.getAttribute('href') === "/#" + current) {// Durante la iteración se busca una coincidencia entre el id del section actual y el enlace, para añadir la clase activa al li, hijo del enlace con el cual hubo coincidencia
                link.firstChild.classList.add("active");
                // Agregar la clase active al li activo
            }
        });
    }
    window.addEventListener("scroll", articleActive);
});