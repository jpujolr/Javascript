//Formularios a validar
var forms = document.querySelectorAll('form');

//Iterar sobre los formularios
Array.prototype.slice.call(forms).forEach(function(form) {
  form.addEventListener('submit', function(event) {
    if (!form.checkValidity()) {
      event.preventDefault(); //Evitar envio si formulario no valido
      event.stopPropagation(); //Stop
    }
    form.classList.add('was-validated'); //Añadir la clase de validación a los formularios para marcarlos como validados
  }, false);
});
