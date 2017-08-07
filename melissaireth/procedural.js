function isPrime(num) {

	var prime = true;
		for(var j=2; j<num; j++){
			   if(num % j == 0){
		      prime = false;
		}
	}
	return prime;
}

function getPrimes(start, end) {
	var arr = []
  for (var i = start; i < end; i++) {
    /*var isprime = true;*/

    if (isPrime(i)) {
      console.log(i);
      arr.push(i);
    }
  }
  return arr;
  console.log(arr)
}

/*No pasa las pruebas por fallo, revisado en consola*/