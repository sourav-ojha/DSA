/**Problem Description
You are given a binary tree. You need to find the nodes in order of left to right which will be visible when the tree is viewed from the top. */
/*
Definition for TreeNode
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
        this.next =null;
        this.parent = null;
    }
}
*/
/**
 * @param {TreeNode} head
 * @return {number[]}
 */
function topViewBinaryTree(root) {
  if (!root) return [];
  let queue = [root];
  let map = new Map();
  let min = 0;
  let max = 0;
  root.hd = 0;
  while (queue.length) {
    let node = queue.shift();
    let hd = node.hd;
    if (!map.has(hd)) {
      map.set(hd, node.val);
      if (hd < min) min = hd;
      if (hd > max) max = hd;
    }
    if (node.left) {
      node.left.hd = hd - 1;
      queue.push(node.left);
    }
    if (node.right) {
      node.right.hd = hd + 1;
      queue.push(node.right);
    }
  }
  let result = [];
  for (let i = min; i <= max; i++) {
    result.push(map.get(i));
  }
  return result;
}
