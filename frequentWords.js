/**Constraints
1 <= N <= 1000

1 <= Length(S) <= 100000

'a' <= S[i] <= 'z'

1 <= K <= Number of Unique Strings

 */

/**
 * Problem Description
You are given a list of words present in a book. Your younger brother is really curious to know the K most frequent words in the book, you have to find them.


Your answer should be sorted by frequency from highest to lowest. If two words have the same frequency, then the word with the lower alphabetical order should come first.
 */
/**
 * @param {string[]} n
 * @param {number} k
 * @return {string[]}
 */
function frequentWords(words, k) {
  let map = new Map();
  let result = [];
  for (let i = 0; i < words.length; i++) {
    if (map.has(words[i])) {
      map.set(words[i], map.get(words[i]) + 1);
    } else {
      map.set(words[i], 1);
    }
  }

  // sort the map by value
  // if the values are the same, sort by key in alphabetical order
  let sortedMap = new Map(
    [...map.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
  );
  let i = 0;
  for (let [key, value] of sortedMap) {
    if (i === k) {
      break;
    }
    result.push(key);
    i++;
  }
  return result;
}
