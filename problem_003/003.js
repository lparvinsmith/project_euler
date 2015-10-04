// What is the largest prime factor of the number 600851475143 ?

// determine whether number is prime using trial division
var isPrime = function(x){
  if (isNaN(x) || !isFinite(x) || x % 1 || x < 2) {
    return false;
  }
  var m = Math.sqrt(x); // largest factor will never be larger than square root of n
  for (var i = 2; i <= m; i++) {
    if (x % i === 0)
      return false;
  }
 return true;
};

// get array of primes less than n
var getPrimes = function(n){
  var primes = [];
  for (i = 2; i < n; i++){
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
};

// iterate from largest to smallest prime, seeing if n is divisible by prime. the first to have remainder of 0 is returned.
var findLargestPrimeFactor = function(n){
  var candidates = getPrimes(n).reverse();
  for (i = 0; i < candidates.length; i++){
    if(n % candidates[i] === 0){
      return candidates[i];
    }
  }
};

console.log(findLargestPrimeFactor(600851475143));
