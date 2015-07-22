 // Sum square difference
 // Problem 6
 // make solution work for any range of numbers

function squareDiff(max) {
  var sumSquares = 0;
  var squareSums = 0;
  var sum = 0;
  for (i = 1; i <= max; i++) {
    sumSquares += (i* i);
    sum += i;
  }
  squareSums += (sum * sum);
  return squareSums - sumSquares;
}

console.log(squareDiff(10));
console.log(squareDiff(100));
