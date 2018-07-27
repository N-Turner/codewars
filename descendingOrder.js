/*
Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 21445 Output: 54421

Input: 145263 Output: 654321

Input: 1254859723 Output: 9875543221
*/

/* 
==================================================
                  Solution
==================================================
*/

const descendingOrder = (n) => {
  let str = JSON.stringify(n);

  let numArr = str.split('');

  let sorted = numArr.sort((a,b) => b - a).join('');

  return parseInt(sorted);
}

/* 
==================================================
              Refactored Solution
==================================================
*/

const descendingOrder = (n) => {
  return parseInt(n.toString().split('').sort().reverse().join(''));
}