//DECLARAMOS LAS VARIABLES    
let i, retornar;
//BUCLE FOR PARA RECORRER DE 1 A 30
for (i = 1; i <= 30; i++) {
    //BUCLE INTERIOR PARA HACER LAS REPETICIONES
    for (retornar = 0; retornar < i; retornar++) {
        //IMPRIMIMOS EL NÚMERO i, i VECES
        document.write(i);
    }
    //IMPRIMIMOS UN SALTO DE LÍNEA
    document.write("<br>");
}