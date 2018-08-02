/*
Welcome. In this kata, you are asked to square every digit of a number.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer
*/

/* 
==================================================
                  Solution
==================================================
*/

const squareDigits = (nums) => {
  //return nums.toString().split('').map(num => parseInt(num ** 2)).join('');
  let strArr = nums.toString().split('');

  let squared = strArr.map((num) => {
    return Math.pow(num, 2);
  });

  return parseInt(squared.join(''));
}

/* 
==================================================
              Refactored Solution
==================================================
*/

const squareDigits = (nums) => {
  return Number(nums.toString().split('').map(num => Math.pow(num, 2)).join(''));
}