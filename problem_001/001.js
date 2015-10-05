// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

var fizzbuzzSum = function(max){
  sum = 0;
  for (var i = 1; i < max; i++){
    if (i % 3 === 0){
      sum += i;
    }
    if (i % 5 === 0){
      sum += i;
    }
    if (i % 15 === 0){ // fixes for double counted nums
      sum -= i;
    }
  }
  return sum;
};

console.log(fizzbuzzSum(1000));
// returns 233168
