/**
 * Problem Description
Given an array, print the next smaller element for every element. The next smaller element for an element x is the first smaller element on the right side of x in the array. Elements for which no next smaller element exists, consider it as -1.
 */

/**
 * @param {number} n
 * @param {number[]}arr
 * @return {number[]}
 */
function nextSmallerElement(n, arr) {
  let ans = [];
  // brute force
  //   for (let i = 0; i < n; i++) {
  //     let found = false;
  //     for (let j = i + 1; j < n; j++) {
  //       if (arr[j] < arr[i]) {
  //         ans.push(arr[j]);
  //         found = true;
  //         break;
  //       }
  //     }
  //     if (!found) {
  //       ans.push(-1);
  //     }
  //   }

  // stack
  let stack = [];
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length > 0 && stack[stack.length - 1] >= arr[i]) {
      stack.pop();
    }
    if (stack.length === 0) {
      ans.push(-1);
    } else {
      ans.push(stack[stack.length - 1]);
    }
    stack.push(arr[i]);
  }
  return ans.reverse();
}
