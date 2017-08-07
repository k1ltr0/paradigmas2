 
function isPrime(num) {
  
  for( var j = 2; j <= num/2; j++){
    if( num%j == 0){
    	var isprime = false;
    }else{
    	var isprime = true;
    }
}
    return isprime;
}

function getPrimes(start, end) {
	var arr = [];
  for (start; start < end; start++) {
   
    var primo = isPrime(start);
    //console.log(primo);
    if(primo == true){
    	arr.push(start);
    }  
  }
  if (arr) {
      console.log(arr);
    }

}
getPrimes(2,20);
