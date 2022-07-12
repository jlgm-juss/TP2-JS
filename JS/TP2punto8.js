//PEDIMOS EL NÚMERO POR TECLADO
let nrep = prompt("Introduce numero de repeticiones");
//SI LO INTRODUCIDO ES UN NÚMERO
if (Number(nrep) == nrep) {
  //SI ES UN NÚMERO ENTRE 1 Y 50
  if (nrep > 0 && nrep <= 50) {
    let rep, i;
    //BUCLE QUE VA DESDE 0 HASTA nrep
    for (i = 0; i <= nrep; i++) {
      //BUCLE DESDE 1 HASTA i
      for (rep = 1; rep <= i; rep++) {
        document.write(rep);
      }
      document.write("<br>");
    }
  } else {
    alert("El número introducido no es válido");
  }
} else {
  alert("No has introducido un número");
}
