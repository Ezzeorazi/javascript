function siempreTrue() {
    return true;
  }
  console.log(siempreTrue());
  
  async function delayedConsoleLog() {
    await new Promise(resolve => setTimeout(resolve, 5000));
    console.log("Hola soy una promesa");
  }
  

  function* evenIndexGenerator() {
    let index = 0;
    while (true) {
      yield index;
      index += 2;
    }
  }
  

  
  delayedConsoleLog();
  
  const generator = evenIndexGenerator();
  console.log(generator.next().value);
  console.log(generator.next().value);
  console.log(generator.next().value);
  