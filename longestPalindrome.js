/**
 * Problem Description
You are given a string consisting of lower and upper case characters.
You need to find the length of the longest palindrome which you can create by using the characters from the string.
Note: Upper case and lower case characters are different from each other i.e, "Aa" is not a palindrome as 'A' != 'a'.


 */
/**
 * @param {number} n
 * @param {string} s
 * @return {number}
 */
function longestPalindrome(n, str) {
  let map = new Map();
  for (let i = 0; i < n; i++) {
    if (map.has(str[i])) {
      map.set(str[i], map.get(str[i]) + 1);
    } else {
      map.set(str[i], 1);
    }
  }
  let result = 0;
  let hasOdd = false;
  for (let [key, value] of map) {
    if (value % 2 === 0) {
      result += value;
    } else {
      hasOdd = true;
      result += value - 1;
    }
  }
  if (hasOdd) {
    result += 1;
  }
  return result;
}
