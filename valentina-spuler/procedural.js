function isPrime(num) {
  var prime = true;
  for (var j = 2; j < num; j++){
    if (num % j === 0) {
      prime = false;
    }
  }
  return prime;
}

function getPrimes(start, end) {
  var arr = [];
  for (var i = start; i < end; i++) {
    if (isPrime(i)) {
      arr.push(i);
    }
  }

  console.log(arr);
  return arr;
};

getPrimes(2,20);
