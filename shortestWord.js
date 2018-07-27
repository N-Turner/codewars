/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

console.log(findShort("bitcoin take over the world maybe who knows perhaps")) // 3
*/

/* 
==================================================
                  Solution
==================================================
*/

const findShort = (str) => {
  let shortWord = str.split(' ').sort((a,b) => a.length - b.length);
  return shortWord[0].length;
}

/* 
==================================================
              Refactored Solution
==================================================
*/

const findShort = (str) => {
  return Math.min(...str.split(' ').map(s => s.length));
}