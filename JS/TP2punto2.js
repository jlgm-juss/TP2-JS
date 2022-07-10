let number = parseInt(prompt("Ingrese un numero del 0 al 10"));

if (number <= 2) {
  document.write("Muy deficiente");
} else if (number <= 4) {
  document.write("Insuficiente");
} else if (number <= 6) {
  document.write("Suficiente");
} else if (number <= 7) {
  document.write("Bien");
} else if (number <= 9) {
  document.write("Notable");
} else if (number === 10) {
  document.write("Sobresaliente");
} else if (number > 10) {
  document.write("numero erroneo");
  alert("introduce un numero valido");
}
