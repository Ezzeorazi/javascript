const fechaHoy = new Date();
console.log(fechaHoy);

const fechaNacimiento = new Date("1990-8-11");
console.log(fechaNacimiento);

const esMasTarde = fechaHoy > fechaNacimiento;
console.log(esMasTarde);

const diaNacimiento = fechaNacimiento.getDate();
console.log(diaNacimiento);

const mesNacimiento = fechaNacimiento.getMonth();
console.log(mesNacimiento);

const anioNacimiento = fechaNacimiento.getFullYear();
console.log(anioNacimiento);

