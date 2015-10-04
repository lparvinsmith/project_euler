// What is the largest prime factor of the number 600851475143 ?

// determine whether number is prime using trial division
var isPrime = function(x){
  if (isNaN(x) || !isFinite(x) || x % 1 || x < 2) {
    return false;
  }
  var m = Math.sqrt(x); // largest factor will never be larger than square root of x
  for (var i = 2; i <= m; i++) {
    if (x % i === 0)
      return false;
  }
 return true;
};

// divide n by (n - i) until remainder is 0, see if n-i is prime, and if so, return it.
var findLargestPrimeFactor = function(n){
  var m = Math.round(Math.sqrt(n)); // largest factor will never be larger than square root of n
  for (var i = 0; i < m; i++) {
    if (n % (m - i) === 0 && isPrime(m - i)) {
      return (m - i);
    }
  }
};

console.log(findLargestPrimeFactor(600851475143));
// returns 6857
