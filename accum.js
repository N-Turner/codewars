/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd");    // "A-Bb-Ccc-Dddd"
accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt");    // "C-Ww-Aaa-Tttt"

Test.assertEquals(accum("ZpglnRxqenU"), "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");
*/
/* 
==================================================
                  Solution
==================================================
*/
const accum = (str) => {
  let strArr = str.toLowerCase().split('');

  let tempMap = strArr.map((char, index) => {
    let repeatChar = char.repeat(index + 1);
    let capitalChar = repeatChar[0].toUpperCase();
    return capitalChar.concat(repeatChar.slice(1));
  });

  return tempMap.join('-');
}

/* 
==================================================
              Refactored Solution
==================================================
*/

const accum = (str) => {
  return str.split('').map((char, index) => char.toUpperCase() + char.toLowerCase().repeat(index)).join('-');
}