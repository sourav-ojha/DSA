/**Problem Description
You are given two strings and an integer k,find whether the given two strings are similar or not. Two given strings s1 and s2 are similar if for each character the difference between the frequency of that character in s1 and s2 is at most k. If the given strings are similar then print Yes otherwise print No. (Note : Both strings s1 and s2 are in lowercase )

 */

/**
 * @param {number} n
 * @param {number} m
 * @param {number} k
 * @param {String} s1
 * @param {String} s2
 * @return {String}
 */
function similarString(n, s1, m, s2, k) {
  let map = new Map();

  for (let i = 0; i < n; i++) {
    if (map.has(s1[i])) {
      map.set(s1[i], map.get(s1[i]) + 1);
    } else {
      map.set(s1[i], 1);
    }
  }

  for (let i = 0; i < m; i++) {
    if (map.has(s2[i])) {
      map.set(s2[i], map.get(s2[i]) - 1);
    } else {
      map.set(s2[i], -1);
    }
  }

  for (let [key, value] of map) {
    if (Math.abs(value) > k) {
      return "No";
    }
  }
  return "Yes";
}
let res = similarString(5, "aabcde", 5, "bcdef", 1);
console.log(res);
