let n = 10
let resultado = 1
let i = 1

while (true) {
    resultado *= i;

    if (i === n) {
      break;
    }

    i++;
  }

  console.log(`El factorial de ${n} es ${resultado}`)