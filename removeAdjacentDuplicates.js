/**Problem Description
You are given a string s, consisting of lowercase letters. You need to make duplicate removal on s until you no longer can.


A duplicate removal consists of choosing two adjacent equal characters and removing both of them.
Return the final string after all such duplicate removals have been made. */

/**
 * @param {String} s
 * @return {String}
 */
function removeAdjacentDuplicates(s) {
  while (checkDuplicates(s)) {
    let result = "";
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== s[i + 1]) {
        result += s[i];
      } else {
        i++;
      }
    }
    s = result;
  }
  return s;
}

function checkDuplicates(s) {
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      return true;
    }
  }
  return false;
}

console.log(removeAdjacentDuplicates("abbaca"));
