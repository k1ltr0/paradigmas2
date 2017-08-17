function isPrime(num) {
    var isPrime = true;
    for (var j = 2; num > j; j++) {
        if(num%j==0)
            isPrime = false;
    }

    return isPrime;
}

function getPrimes(start, end) {
    var primes = new Array();
    for (var num = start; num < end; num++) {
        if (isPrime(num)) {
            primes.push(num);
        }
    }

    return primes;
}

export { getPrimes };