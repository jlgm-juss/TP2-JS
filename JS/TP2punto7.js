//PEDIMOS EL NÚMERO POR TECLADO
let nrep = prompt("Introduce numero de repeticiones");
//SI LO INTRODUCIDO ES UN NÚMERO
if (Number(nrep) == nrep) {
    //SI ES UN NÚMERO ENTRE 1 Y 50
    if (nrep > 0 && nrep <= 50) {
        let rep,i;
        //BUCLE QUE VA DESDE nrep HASTA 1
        for (i = nrep; i >= 1; i--) {
            //BUCLE DESDE i HASTA 1
            for (rep = i; rep >= 1; rep--) {
                document.write(i);
            }
            document.write("<br>");
        }
    } 
    else {
        alert("El número introducido no es válido");
    }
} 
else {
    alert("No has introducido un número");
}