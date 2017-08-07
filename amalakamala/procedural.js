var arr = [];

function isPrime(num){
	for(var j = 2; j < num; j++){
    	if(num % j  == 0){
  		return false;
  		}
    }    
    return j;     
}

function getPrimes(start, end){
  for (var i = start; i < end; i++) {
    var isprime = true;    

    if (isPrime(i)){
      arr.push(i);       
    }
  }
  return arr;
}
