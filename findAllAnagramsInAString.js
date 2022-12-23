/**Problem Description
You are given two strings, a main string S, and a pattern P. You have to find the starting indices of the anagrams of P in S.


Anagrams are permutations of a string. For P="abc”, its anagrams are abc,acb,bca,bac,cba,cab.


Note that indexing starts at 0. */

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
function findAllAnagramsInAString(s, p) {
  let result = [];
  let map = new Map();
  let pMap = new Map();
  for (let i = 0; i < p.length; i++) {
    if (pMap.has(p[i])) {
      pMap.set(p[i], pMap.get(p[i]) + 1);
    } else {
      pMap.set(p[i], 1);
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + 1);
    } else {
      map.set(s[i], 1);
    }
    if (i >= p.length) {
      if (map.get(s[i - p.length]) === 1) {
        map.delete(s[i - p.length]);
      } else {
        map.set(s[i - p.length], map.get(s[i - p.length]) - 1);
      }
    }
    if (i >= p.length - 1) {
      if (isAnagram(map, pMap)) {
        result.push(i - p.length + 1);
      }
    }
  }
  return result;
}

const isAnagram = (map, pMap) => {
  if (map.size !== pMap.size) {
    return false;
  }
  for (let [key, value] of map) {
    if (pMap.get(key) !== value) {
      return false;
    }
  }
  return true;
};
