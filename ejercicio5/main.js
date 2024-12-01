//Seleccionamos la lista y el botón y almacenamos en variables
const lista = document.getElementById('lista');
const addButton = document.getElementById('B');

//Accion boton
addButton.addEventListener('click', () => {
  //Calculamos la posición del próximo elemento
  const newPosition = lista.children.length + 1;

  //Creamos un nuevo elemento de la lista: <li>
  const newElement = document.createElement('li');
  newElement.className = 'list-group-item'; //Clase Bootstrap
  newElement.textContent = `Elemento ${newPosition}`; //Texto del nuevo elemento

  //Añadimos el nuevo elemento a la lista
  lista.appendChild(newElement);
});
