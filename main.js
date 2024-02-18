export const fn = (a, b, c) => {  //Se declara una funcion "fn" con 3 valores numericos que representan los ingredientes de las empanadas.
   if (a < 0) {
       throw Error("El valor de 'a' no puede ser negativo."); // Verifica que el valor de "a" no sea negativo.
   } else if (b < 0) {
       throw Error("El valor de 'b' no puede ser negativo."); // Verifica que el valor de "b" no sea negativo.
   } else if (c < 0) {
       throw Error("El valor de 'c' no puede ser negativo."); // Verifica que el valor de "c" no sea negativo.
   } else if (a + b + c > 40) {
       throw Error("La cantidad total de empanadas no puede ser superior a 40"); // Verifica que la suma de las empanadas no sea mayor a 40.
   } else if ((a + b + c) % 3 !== 0) {
       throw Error("La suma de 'a', 'b' y 'c' debe ser divisible por 3."); // Verifica que la suma de las empanadas sea divisible entre 3.
   } else {
       return Math.ceil((a * 12 + b * 14 + c * 16) / 3); // Si ninguna de las anteriores condiciones se cumple se calcula la media ponderada y se redondea el resultado hacia arriba con "Math.ceil()".
   }
};




// a = empanadas de 3 ingredientes
// b = empanadas de 4 ingredientes
// c = empanadas de 5 ingredientes