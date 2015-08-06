//QUESTION

/*
ROTATING AN ARRAY

Write a function that takes an array of integers and returns that array rotated by N positions. 

For example, if N=2, given the input array [1, 2, 3, 4, 5, 6] the function should return [5, 6, 1, 2, 3, 4]
*/

//Solution

var rotate_array = function(arr, position){
  var result = [];

  arr.forEach(function(element, index){
    newIndex = position + index;
    
    if(newIndex <= arr.length - 1){
        result[newIndex] = element;
    }else {
      result[newIndex - arr.length] = element;
    }
  });

   return result;
};