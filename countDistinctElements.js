"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.replace(/\s+/g, " ").trim();
    });
  main();
});

function readLine() {
  return inputString[currentLine++];
}

function readIntArr() {
  let str = readLine();
  str = str.split(" ");
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    arr.push(parseInt(str[i], 10));
  }
  return arr;
}

function print(x) {
  process.stdout.write(x + "");
}
/**
 * @param {number} n
 * @param {number[]} arr
 * @param {number} b
 * @return {number[]}
 */

/*
Problem Description
Given an array of N elements and an integer B, you have to find the count of distinct numbers in all windows of size B.

You have to return an array of size N-B+1 where i'th element in the array is the number of distinct elements in sequence Ai, Ai+1 ,..., Ai+B-1. If B > N, return an empty array.
*/

// function countDistinctElements(n, b, arr) {
//   let result = [];
//   let map = new Map();
//   for (let i = 0; i < b; i++) {
//     if (map.has(arr[i])) {
//       map.set(arr[i], map.get(arr[i]) + 1);
//     } else {
//       map.set(arr[i], 1);
//     }
//   }
//   result.push(map.size);
//   for (let i = b; i < n; i++) {
//     if (map.get(arr[i - b]) === 1) {
//       map.delete(arr[i - b]);
//     } else {
//       map.set(arr[i - b], map.get(arr[i - b]) - 1);
//     }
//     if (map.has(arr[i])) {
//       map.set(arr[i], map.get(arr[i]) + 1);
//     } else {
//       map.set(arr[i], 1);
//     }
//     result.push(map.size);
//   }
//   return result;
// }

// 1 <= b <= n <= 10^5;
function countDistinctElements(n, b, arr) {
  let result = [];
  let map = new Map();
  for (let i = 0; i < b; i++) {
    if (map.has(arr[i])) {
      map.set(arr[i], map.get(arr[i]) + 1);
    } else {
      map.set(arr[i], 1);
    }
  }
  result.push(map.size);
  for (let i = b; i < n; i++) {
    if (map.get(arr[i - b]) === 1) {
      map.delete(arr[i - b]);
    } else {
      map.set(arr[i - b], map.get(arr[i - b]) - 1);
    }
    if (map.has(arr[i])) {
      map.set(arr[i], map.get(arr[i]) + 1);
    } else {
      map.set(arr[i], 1);
    }
    result.push(map.size);
  }
  return result;
}

function main() {
  let [n, b] = readIntArr();
  let arr = readIntArr();
  let result = countDistinctElements(n, b, arr);
  console.log(...result);
}
