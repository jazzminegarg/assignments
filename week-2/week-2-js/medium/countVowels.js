/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  vowels=['a', 'e', 'i', 'o', 'u'];
  let count=0;
  str.toLowerCase().split('').forEach(element => {
    if(vowels.includes(element)) { count++; }
  });
  // console.log(count);
  return count;

}

// countVowels("jasmine");
module.exports = countVowels;