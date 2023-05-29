let nombre = "Ezequiel"
let apellido = "Orazi"

let estudiante = (nombre + " " + apellido);
console.log(estudiante)

let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus)

let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus)

var numeroCaracter = estudiante.length;
console.log(numeroCaracter)

var primerLetraNombre = nombre[0];
console.log(primerLetraNombre)

var ultimaLetraApellido = apellido[apellido.length-1];
console.log(ultimaLetraApellido)

let eliminarEspacios = estudiante.replace(" ", '');
console.log(eliminarEspacios)

var contenidoNombre = estudiante.includes(nombre);
console.log(contenidoNombre)
