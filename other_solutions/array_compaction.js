//QUESTION

/*
ARRAY COMPACTION

Write a function that takes as input a sorted array and modifies the array to compact it, removing duplicates. 

Notes: The input array might be very large. 

For example: 

● input array = [1, 3, 7, 7, 8, 9, 9, 9, 10] 

● transformed array = [1, 3, 7, 8, 9, 10] 
*/

//Solution

var compact_array = function(arr){
  var result = [];
  arr.forEach(function(a){
    if(result.indexOf(a) == -1){
        result.push(a);
    }
  });
  return newArr;
};