/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, and u as vowels for this Kata.

The input string will only consist of lower case letters and/or spaces.

console.log((getCount("abracadabra"))) // 5
*/

/* 
==================================================
                  Solution
==================================================
*/

// Recursive solution
const getCount = (str) => {
  if (str.length === 0) return 0;

  let sum = 0;

  if (getVowel(str[0])) sum += 1;

  sum += getCount(str.slice(1));

  return sum;
}

const getVowel = (char) => {
  let vowels = [...`aeiou`];
  return vowels.includes(char);
}

/* 
==================================================
              Refactored Solution
==================================================
*/
const getCount = (str) => {
  return str.match(/[aeiou]/ig||[]).length
}