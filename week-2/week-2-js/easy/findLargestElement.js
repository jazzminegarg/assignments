/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let max=-Infinity;
    numbers.forEach(element => {
        max=element>max?element:max;
    });
    // console.log(max);
    return max>-Infinity?max:undefined;
}

// findLargestElement([3, 7, 2, 9, 1]);
module.exports = findLargestElement;