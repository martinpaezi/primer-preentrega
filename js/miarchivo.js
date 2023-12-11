let volverAIntentar = true
let nombre = prompt("¿Cómo te llamas?");

alert(`¡Bienvenido ${nombre}!`);
  
function determinarEquipo() {
  alert("Vamos a ver de qué equipo deberías ser hincha en el fútbol argentino.");

  let valores = prompt("¿Te representan tus valores? (Responde 's' para sí, 'n' para no)");
  let personalidad = prompt("¿Tienes una personalidad fuerte? (Responde 's' para sí, 'n' para no)");
  let importaGanar = prompt("¿Te importa solamente ganar a cualquier costo, hasta quizas de una manera poco honesta? (Responde 's' para sí, 'n' para no)");
  let jugarBien = prompt("¿Te importa mas jugar bien, que ganar o perder? (Responde 's' para sí, 'n' para no)");

  if (valores.toLowerCase() === 's' && personalidad.toLowerCase() === 's' && importaGanar.toLowerCase() === 'n' && jugarBien.toLowerCase() === 'n') {
      alert("Deberías ser hincha de Estudiantes.");
  } else if (valores.toLowerCase() === 'n' && personalidad.toLowerCase() === 'n' || personalidad.toLowerCase() === 's'  && importaGanar.toLowerCase() === 's' && jugarBien.toLowerCase() === 'n') {
      alert("Deberías ser hincha de Boca.");
  } else if (valores.toLowerCase() === 'n' || valores.toLowerCase() === 's'  && personalidad.toLowerCase() === 'n' || personalidad.toLowerCase() === 's' && importaGanar.toLowerCase() === 'n' && jugarBien.toLowerCase() === 's') {
      alert("Deberías ser hincha de River.");
  } else {
      alert("No se puede determinar un equipo.");
  }
}

while (volverAIntentar){

determinarEquipo();

let otroIntento = prompt("¿Querés intentar otra vez? (Responde 's' para sí, 'n' para no)")

if(otroIntento.toLowerCase() === 's'){
  volverAIntentar = true;
} else if(otroIntento.toLowerCase() === 'n'){
  volverAIntentar = false;
}
}

alert(`¡Hasta luego ${nombre}!`)