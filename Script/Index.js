// Función para mostrar una sección y ocultar las demás
function showSection(id) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
      section.style.display = 'none';
    });
  
    const selectedSection = document.getElementById(id);
    if (selectedSection) {
      selectedSection.style.display = 'block';
    }
  
    // También podrías actualizar el título principal si es necesario
    const titleElement = document.querySelector('.Dashboard');
    if (titleElement) {
      titleElement.textContent = id.toUpperCase();
    }
  }
  