export const fn = (a, b, c) => {
   if (a < 0) {
       throw Error("El valor de 'a' no puede ser negativo.");
   } else if (b < 0) {
       throw Error("El valor de 'b' no puede ser negativo.");
   } else if (c < 0) {
       throw Error("El valor de 'c' no puede ser negativo.");
   } else if (a + b + c >= 40) {
       throw Error("La cantidad total de empanadas no puede ser superior a 40");
   } else if ((a + b + c) % 3 !== 0) {
       throw Error("La suma de 'a', 'b' y 'c' debe ser divisible por 3.");
   } else {
       return Math.ceil((a * 12 + b * 14 + c * 16) / 3);
   }
};
