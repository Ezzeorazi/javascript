function fibonacci(num) {
    var fibList = [];
    
    if (num >= 1) {
      fibList.push(1);
    }
    
    if (num >= 2) {
      fibList.push(1);
    }
    
    for (var i = 2; i < num; i++) {
      var nextFib = fibList[i - 1] + fibList[i - 2];
      fibList.push(nextFib);
    }
    
    return fibList;
  }
  
  var resultado = fibonacci(6);
  console.log(resultado); 
  