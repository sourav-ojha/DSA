/**Problem Description
Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges between them. */
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
 * @param {TreeNode} root
 * @return {int}
 */
function diameterOfBinaryTree(root) {
  // pseudo code
  // set max to 0
  // set helper function to take in a node
  // if node is null, return 0
  // set left to helper function with node.left
  // set right to helper function with node.right
  // set max to Math.max of max and left + right
  // return Math.max of left and right + 1
  // call helper function with root
  // return max
  let max = 0;
  function helper(node) {
    if (!node) return 0;
    let left = helper(node.left);
    let right = helper(node.right);
    max = Math.max(max, left + right);
    return Math.max(left, right) + 1;
  }
  helper(root);
  return max;
}
