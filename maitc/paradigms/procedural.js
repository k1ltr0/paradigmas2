var arr = [];

function isParime(num) {
  for(var j=2;j<num;j++){ 
            if(num%j==0 ){
                return false;
            }
        }

    return j;
}
function getPrimes(start, end) {
	
  for (var i = start; i < end; i++) {
    var isPrime = true;

    if(isParime(i)){
			arr.push(i);
		}
    

    if (isPrime) {
      console.log(i);
    }
  }

	return arr;
}

getPrimes();
