var array_primos = [];

function isPrime(num) {
  for (var j = 2; j < num; j++) {
    if (num % j == 0) {
      return false;
    }
  }
  return j;
}

function getPrimes(start, end){
  for (var i = start; i < end; i++) {
    var is_prime = true;

    if (isPrime(i)) {
      array_primos.push(i);
    }
  }

  return array_primos;
}