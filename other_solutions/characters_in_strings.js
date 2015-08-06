//QUESTION

/*
CHARACTERS IN STRINGS

Implement a function with signature find_chars(string1, string2) that takes two strings and returns a string that 

contains only the characters found in string1 and string two in the order that they are found in string1. Implement 

a version of order N*N and one of order N.
*/

//Solution

//assumptions

//that the resulting string will have no duplicate charaters

var find_chars = function(string1, string2){
  var arr1 = string1.split('');
  var arr2 = string2.split('');

  var newString = '';

  arr1.forEach(function(a){
      if(arr2.indexOf(a) != -1 && newString.indexOf(a) == -1){
        newString = newString.concat(a);
      }
  });
  return newString;
}