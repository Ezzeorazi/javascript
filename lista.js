
const nombre = "Ezequiel";

const edad = 32;

const esDesarrollador = true;


const fechaNacimiento = new Date(1990, 8, 11); 


const libroFavorito = {
  titulo: "Cien años de soledad",
  autor: "Gabriel Garcia Márquez",
  fecha: new Date(1967, 6, 5), 
  url: "https://ejemplo.com/libro"
};


const lista = [nombre, edad, esDesarrollador, fechaNacimiento, libroFavorito];

console.log(typeof lista)

console.log(Array.isArray(lista));