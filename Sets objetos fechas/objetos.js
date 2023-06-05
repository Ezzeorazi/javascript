const datos = {
    nombre: "Ezequiel",
    apellido: "Orazi",
    edad: 32,
    altura: 1.92,
    eresDesarrollador: true,
}
console.log(datos)

const edad = datos.edad;
console.log(edad);

const datosAmigo1 = {
    nombre: "Marianela",
    apellido: "Coronel",
    edad: 28,
    altura: 1.60,
    eresDesarrollador: false
  };
  
  const datosAmigo2 = {
    nombre: "Pedro",
    apellido: "López",
    edad: 35,
    altura: 1.80,
    eresDesarrollador: true
  };
const listaDatosPersonales = [datos, datosAmigo1, datosAmigo2];
console.log(listaDatosPersonales)

listaOrdenada = listaDatosPersonales.sort((a,b) => a.edad - b.edad);

console.log(listaOrdenada)
