/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let arr=str.toLowerCase().split('');
  let i=0;
  let j=arr.length-1;
  while(i<=j){
  if(arr[i].charCodeAt(0)<97 || arr[i].charCodeAt(0)>122){
     i++; 
     continue;
  }
  if(arr[j].charCodeAt(0)<97 || arr[j].charCodeAt(0)>122){
     j--; 
     continue;
  }
  if(arr[i]!=arr[j]){
    console.log(arr[i]+arr[j]);
    return false;
  } 
  i++;
  j--;
  }
  return true;
}
console.log(isPalindrome('Able, was I ere I saw Elba!'));

module.exports = isPalindrome;
