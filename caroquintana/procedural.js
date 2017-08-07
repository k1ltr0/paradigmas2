function isPrime(num) {
	var isprime = true;	
  for(var j = 2;  j < num ; j++ ){
      if ( num % j == 0){
        isprime = false;
      }
    };
    return isprime;
}

function getPrimes(start, end) {
  var arr = [];
  for (var i = start; i < end; i++) {

    if (isPrime(i)) {
      arr.push(i);
    }
  }
  return arr;
  console.log(arr);
}
