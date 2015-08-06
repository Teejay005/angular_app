//QUESTION

/*
LEAST COMMON MULTIPLE

The least common multiple of a set of integers is the smallest positive integer that is a multiple of all of the 

integers in the set. 

Write a function that takes an array of integers and efficiently calculates and returns the LCM.
*/

//Solution

//Note: lcm == least common multiple, gcd == greates common denominator

var calcuate_lcm  = function(arr){
  return arr.reduce(function(prevValue, currentValue){
    return prevValue*currentValue/calculate_gcd(prevValue,currentValue);
  });
};

var calculate_gcd = function(firstNumber, secondNumber) {
    if ( ! secondNumber) {
        return firstNumber;
    }
    return gcd(secondNumber, firstNumber % secondNumber);
};
