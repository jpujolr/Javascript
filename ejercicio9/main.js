//Guardamos el "gato" en una variable
const cat = document.getElementById("myCat");

//Inicialmente movimiento hacia la derecha
let direction = "right";

function catWalk() {
  //Obtener la posición del gato
  const currentLeft = parseInt(cat.style.left);

  //Verificar si el gato ha llegado al borde derecho de la pantalla
  if (currentLeft >= window.innerWidth - cat.width) {
    direction = "left"; //Cambiar dirección a la izquierda si ha llegado al borde
  }
  else if(currentLeft <= 0) {
    direction = "right";
  }

  //Actualizar la posición del gato según la dirección
  if (direction === "right") {
    cat.style.left = currentLeft + 10 + "px";
  } else {
    cat.style.left = currentLeft - 10 + "px";
  }
}

//Llamar a catWalk cada 50 milisegundos
setInterval(catWalk, 50);
