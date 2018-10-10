// Boton
const botonHistoria = document.getElementById('boton-Historia');
// Datos
const historiaNombre = document.getElementById('nombre');
const historiaEdad = document.getElementById('Edad');
const historiaDeporte = document.getElementById('Deporte');
const historiaComida = document.getElementById('Comida');
// Parrafo
const historyBox = document.getElementById('history-Box');

botonHistoria.addEventListener('click', generateHistory);


function generateHistory(){
  event.preventDefault();// Evitar que se refresque la pag.
  let nombre = historiaNombre.value;
  let Edad = historiaEdad.value;
  let Deporte = historiaDeporte.value;
  let Comida = historiaComida.value;

  let Historia = "Esta es la historia de un pequeñin llamado " + nombre + ", este amiguito con sus "+ Edad
  + " años se metio a estidiar a Centraal, penso que todo seria divertido hasta que le pidieron que inventara una historia para aprender a usar formularios, "+
   "le gusta practicar " + Deporte + ", pero si para algo es malo es para inventar historias y si para algo es bueno es para comer " + Comida + ".";

  historyBox.innerHTML = Historia; // Actualizar parrafo
}
