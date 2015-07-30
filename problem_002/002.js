// Even Fibonacci numbers
// find sum of even-valued terms whose values do not exceed four million

//gets nth fibonacci value
var fibonacci = function(n) {
    return (n === 1 || n === 2) ? n : fibonacci(n - 1) + fibonacci(n - 2);
};

//get sum of even fibonacci values from 1 to max value
var sum_fib_evens = function(max) {
  var total = 0;
  var n = 1;
  while (fibonacci(n) < max) {
    total += (fibonacci(n) < max && fibonacci(n) % 2 === 0) ? fibonacci(n) : 0;
    n++;
  }
  return total;
};

console.log(sum_fib_evens(4000000));
