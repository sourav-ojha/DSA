/**Problem Description
Given a binary tree, print boundary nodes of the binary tree Anti-Clockwise starting from the root. The boundary includes left boundary, leaves, and right boundary in order.

The left boundary is defined as the path from the root to the left-most node. The right boundary is defined as the path from the root to the right-most node. If the root doesn’t have a left subtree or right subtree, then the root itself is left boundary or right boundary. Note this definition only applies to the input binary tree, and not to any subtrees.

The left-most node is defined as a leaf node you could reach when you always firstly travel to the left subtree if it exists. If not, travel to the right subtree. Repeat until you reach a leaf node.

The right-most node is also defined in the same way with left and right exchanged. */
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

function binaryTreeBoundaryTraversal(root) {
  if (!root) return [];
  let result = [];
  result.push(root.val);
  leftBoundary(root.left, result);
  leaves(root.left, result);
  leaves(root.right, result);
  rightBoundary(root.right, result);
  return result;
}

function leftBoundary(root, result) {
  if (!root || (!root.left && !root.right)) return;
  result.push(root.val);
  if (root.left) leftBoundary(root.left, result);
  else leftBoundary(root.right, result);
}

function rightBoundary(root, result) {
  if (!root || (!root.left && !root.right)) return;
  if (root.right) rightBoundary(root.right, result);
  else rightBoundary(root.left, result);
  result.push(root.val);
}

function leaves(root, result) {
  if (!root) return;
  if (!root.left && !root.right) result.push(root.val);
  leaves(root.left, result);
  leaves(root.right, result);
}
