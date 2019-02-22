/*
Desarrollar en javascript utilizando require y module.exports, un programa que haga lo
siguiente (Cree dos archivos, index.js y cadena.js)

- Recibe cadena
- Verifica si es palindromo R
- Cuenta el número de palabras en la cadena R
- Cuenta el número de letras sin espacios R
- Cuenta el número de vocales R
- Cuenta el número de consonantes
- Imprime toda la información anterior en consola
*/
var sf = require("./cadena");

var str = "Anita lava la tina"

console.log(`Cadena ${str}`);
console.log(`¿Es palindromo? ${sf.isPal(str)}`);
console.log(`Número de palabras ${sf.getNumWords(str)}`);
console.log(`Número de letras sin espacios ${sf.getNumLet(str)}`);
console.log(`Número de vocales ${sf.getNumVoc(str)}`);
console.log(`Número de consonantes ${sf.getNumCons(str)}`);