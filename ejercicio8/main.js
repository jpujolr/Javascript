//Inicializamos contador votos
let votos = [0, 0, 0, 0, 0];

//Crear el gráfico de votos
const contexto = document.getElementById('Grafico').getContext('2d');
const Grafico = new Chart(contexto, {
  type: 'pie', //Gràfico circular "quesito"
  data: {
    labels: ['Socialistas', 'Liberales', 'Animalistas', 'Centristas', 'Ecologistas'],
    datasets: [{
      label: 'Votos',
      data: votos, //Votos iniciales
      backgroundColor: ['#FF5733', '#33FF57', '#3357FF', '#F4A300', '#8A2BE2'],
      borderColor: ['#fff', '#fff', '#fff', '#fff', '#fff'],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            return tooltipItem.label + ': ' + tooltipItem.raw + ' votos';
          }
        }
      }
    }
  }
});

//Función para agregar votos
function vote(partyIndex) {
  votos[partyIndex]++;
  Actualizar();
}

//Función para reiniciar los votos
function reset() {
  votos = [0, 0, 0, 0, 0];
  Actualizar();
}

//Función para actualizar el gráfico
function Actualizar() {
  Grafico.data.datasets[0].data = votos;
  Grafico.update();
}
