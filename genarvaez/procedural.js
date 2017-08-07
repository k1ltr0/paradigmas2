function isPrime(num){
  //...
  var esPrimo = true;
  for(var j = 2; j < num; j++){

  	if(num%j == 0){
  		esPrimo = false;
  	}
  }
	
	return esPrimo;
}

function getPrimes(start, end) {
	var numPrimo = [];
	for (var i = start; i < end; i++){
    	if(isPrime(i)){
    		numPrimo.push(i);   	
    	}
	}
    //...
   
      console.log(numPrimo);
    return numPrimo
}
getPrimes(2, 20)
