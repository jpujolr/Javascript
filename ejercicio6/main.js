//Función: Mostrar ocultar sección

function toggleSection(sectionId, link) {
    var section = document.getElementById(sectionId);
    
    //Verificar si sección esta oculta o visible
    //Si oculta, mostramos y cambiamos texto enlace
    //Si visible, ocultamos y cambiamos texto enlace
    if (section.style.display === "none") {
      section.style.display = "block";
      link.textContent = "Ocultar contenidos";
    } else {
      section.style.display = "none";
      link.textContent = "Mostrar contenidos";
    }
  }
  