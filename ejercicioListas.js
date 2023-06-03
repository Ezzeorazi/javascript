let listaDeCompras = ["Pan", "Calabaza", "Huevos", "Crema", "Leche"]

listaDeCompras
listaDeCompras.push("Aceite de Girasol");
listaDeCompras.pop("Aceite de Girasol");

let peliculasFavoritas = [
    {titulo: "avatar", director:"James Cameron", fecha: 2013},
    {titulo: "Que Paso Ayer", director:"Jose Perez", fecha: 2009},
    {titulo: "2001", director:"El de matrix(ponele)", fecha: 2011},
]

let peliculas2010 = peliculasFavoritas.filter((peliculasFavoritas) => {
    return peliculasFavoritas.fecha < 2010;
});
console.log(peliculas2010)

const directores = peliculasFavoritas.map((peliculasFavoritas) => {
    return peliculasFavoritas.director;
});
console.log(directores)

const titulos = peliculasFavoritas.map((peliculasFavoritas) => {
    return peliculasFavoritas.titulo;
});
console.log(titulos)

const union = directores.concat(titulos);
console.log(union)

const unionFactor = [...directores, ...titulos];

console.log(unionFactor)