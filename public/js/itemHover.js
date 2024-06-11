// Selecciona todos los elementos .sectionExperience y .articleWebsite
const sectionExperienceElements = document.querySelectorAll('.sectionExperience');
const articleWebsiteElements = document.querySelectorAll('.articleWebsite');

// Función para cambiar la opacidad de un grupo de elementos
function changeOpacity(elements, opacity) {
  elements.forEach(element => {
    element.style.opacity = opacity;
  });
}

// Función para manejar el evento 'mouseenter'
function handleMouseEnter(elements, currentElement) {
  changeOpacity(elements, '0.3');
  currentElement.style.opacity = '1';
}

// Función para manejar el evento 'mouseleave'
function handleMouseLeave(elements) {
  changeOpacity(elements, '1');
}

// Agregar eventos a los elementos .sectionExperience
sectionExperienceElements.forEach(element => {
  element.addEventListener('mouseenter', () => handleMouseEnter(sectionExperienceElements, element));
  element.addEventListener('mouseleave', () => handleMouseLeave(sectionExperienceElements));
});

// Agregar eventos a los elementos .articleWebsite
articleWebsiteElements.forEach(element => {
  element.addEventListener('mouseenter', () => handleMouseEnter(articleWebsiteElements, element));
  element.addEventListener('mouseleave', () => handleMouseLeave(articleWebsiteElements));
});
