/**
 * Problem Description
You are given a binary tree.

You need to find the nodes in order of top to bottom which will be visible when the tree is viewed from the right side.

Right view :-
 */
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
function rightViewBinaryTree(root) {
  if (!root) return [];
  let queue = [root];
  let result = [];
  while (queue.length) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      if (i === size - 1) {
        result.push(node.val);
      }
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return result;
}
