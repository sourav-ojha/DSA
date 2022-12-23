/** Constraints
1 <= N <= 1e5

0 <= Superstar <= 1e9

Sample Input 1
4

9 6 7 6

Sample Output 1
9 */

/**
 * @param {number} n
 * @param {number[]} arr
 * @return {number}
 */
function firstUniqueInteger(n, arr) {
  let map = new Map();

  for (let i = 0; i < n; i++) {
    if (map.has(arr[i])) {
      map.set(arr[i], map.get(arr[i]) + 1);
    } else {
      map.set(arr[i], 1);
    }
  }

  for (let i = 0; i < n; i++) {
    if (map.get(arr[i]) === 1) {
      return arr[i];
    }
  }
  return -1;
}
