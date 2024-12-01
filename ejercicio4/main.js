//Variable global
let Visible = false;

function toggleText() {
  const additionalText = document.querySelector('.additional');
  const toggleLink = document.querySelector('.toggle-link');

  //Alternar la visibilidad del texto
  if (Visible) {
    additionalText.classList.add('hidden'); //Esconder texto
    toggleLink.textContent = 'Seguir leyendo'; //Cambiar texto boton
  } else {
    additionalText.classList.remove('hidden'); //Mostrar texto
    toggleLink.textContent = 'Ocultar exceso de texto'; // Cambiar texto boton
  }

  // Cambiar el estado de visibilidad
  Visible = !Visible;
}
