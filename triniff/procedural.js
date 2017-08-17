function isPrime(num) {
  //...
  var isprime = true;
  for(var j = 2; num > j; j++){
      if (num%j == 0) {
        isprime = false;
      }
    };	
  return isprime;
}

function getPrimes(start, end) {
var arreglo = [];
  for (var i = start; i < end; i++) {
    if (isPrime(i)) {
      arreglo.push(i);
    }
  }
  return arreglo;
  console.log(arreglo);
}
