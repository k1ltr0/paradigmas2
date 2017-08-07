function isPrime(num) {
	
		var prime = true;
	    for( var j = 2; j < num; j++){
		    if (num % j == 0){
		      prime = false;
		    }
	    }
	
	return prime;	
}

function getPrimes(start, end) {
  for (var i = start; i < end; i++) {
    //var isprime = true;
    var newArray;    //...

    if (isPrime(i)) {
      console.log(i);
      newArray.push(i);
      
    }
  }
  return newArray;
  console.log(newArray);

}
