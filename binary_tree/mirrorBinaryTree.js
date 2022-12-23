/**Problem Description
Given a binary tree, return the root of the mirror binary tree. Mirror binary tree of a binary tree is a binary tree with left and right children of all nodes interchanged. */
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
 * @return {TreeNode}
 */

function mirrorBinaryTree(root) {
  if (!root) return null;
  let queue = [root];
  while (queue.length) {
    let node = queue.shift();
    let temp = node.left;
    node.left = node.right;
    node.right = temp;
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return root;
}
