let suma = 0;



do {
  let numero = parseInt(prompt("introduce un numero"));
  if (parseInt(numero == numero)) {
    suma = suma + numero;
  } else {
    if (numero != undefined) {
      alert(numero + 'no es un numero');
    }
  }
} while (numero != undefined);
document.write(suma);
