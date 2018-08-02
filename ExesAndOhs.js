/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

/* 
==================================================
                  Solution
==================================================
*/
const XO = (str) => {
  
  let x = [];
  let o = [];

  let strArr = str.toLowerCase();

  for (let i = 0; i < strArr.length; ++i) {
    if (strArr[i] === 'x') x.push(strArr[i]);
    if (strArr[i] === 'o') o.push(strArr[i]);
  }
  
  return (x.length === o.length);
}

/* 
==================================================
              Refactored Solution
==================================================
*/

const XO = (str) => {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);

  return (x && x.length) === (o && o.length);
}