// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

// determine if n is palindrome
var isPalindrome = function(n){
  // convert integer to array
  var newArray = n.toString().split("");
  for (var i = 0; i < Math.floor(newArray.length / 2); i++){
    if (newArray[i] !== newArray[(newArray.length - 1) - i]) {
        return false;
    }
  }
  return true;
};

// determine if integer n is product of two 3 digit numbers
var isProductOfThreeDig = function(n){
  var max = 999;
  var min = 100;
  var isProductOfThree = false;

  for (var i = max; i > min; i--){
    if (n % i === 0 && min <= (n / i) && (n / i) <= max) {
      isProductOfThree = true;
    }
  }
  return isProductOfThree;
};

// start at largest product of 3 digit numbers, use while loop to count down until a number meets both requirements
var palindromeProduct = function(){
  var max = (999 * 999);
  var min = (100 * 100);
  for (var i = max; i > min; i--){
    // console.log(i);
    if(isPalindrome(i) && isProductOfThreeDig(i)){
      return i;
    }
  }
};

console.log(palindromeProduct());
// returns 906609
