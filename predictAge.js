/*
My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

In honor of my grandfather's memory we will write a function using his formula!

Take a list of ages when each of your great-grandparent died.
Multiply each number by itself.
Add them all together.
Take the square root of the result.
Divide by two.
Example
predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86
Note: the result should be rounded down to the nearest integer.

Some random tests might fail due to a bug in the JavaScript implementation. Simply resubmit if that happens to you.
revrot("123456987654", 6) --> "234561876549"
*/
/* 
==================================================
                  Solution
==================================================
*/

const predictAge = (...ages) => {
  let age = ages.map((age) => {
    return Math.pow(age, 2);
  }).reduce((sum, age) => {
    return sum + age;
  });
  
  return Math.floor((Math.sqrt(age) / 2));
}

/* 
==================================================
              Refactored Solution
==================================================
*/

const predictAge = (...ages) => {
  return Math.hypot(...ages) / 2 | 0;
}

