var arrPrime = [];
function isPrime(num) {
	var div;
      for (j=2 ; j<num ; j++){
    	div = num%j;
    	if (div == 0){
    		return false;
    	}
    }
    return j;
}

function getPrimes(start, end) {
	
	
  for (var i = start; i < end; i++) {
    var isprime = true;

    if (isPrime(i)) {
      console.log(i);
      arrPrime.push(i);
    }
  }

  return arrPrime;
}