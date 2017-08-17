 
function isPrime(num) {
  var isprime = true;
  for( var j = 2; j < num; j++){
    if( num%j == 0){
    	 isprime = false;
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
