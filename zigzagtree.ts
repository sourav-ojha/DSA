import Queue from "./lib/Queue";
import TreeNode from "./lib/TreeNode";

function zigzagLevelOrder(root: TreeNode | null): number[] {
  // level order traversal with alternating left to right and right to left
  const result: number[] = [];
  if (root === null) return result;
  const queue = new Queue();
  queue.push(root);
  let leftToRight: boolean = true;
  while (queue.size() > 0) {
    const levelSize = queue.size();
    const currentLevel: number[] = new Array(levelSize);
    for (let i = 0; i < levelSize; i++) {
      const currentNode: TreeNode = queue.pop();
      const index: number = leftToRight ? i : levelSize - i - 1;
      currentLevel[index] = currentNode.val;
      if (currentNode.left !== null) queue.push(currentNode.left);
      if (currentNode.right !== null) queue.push(currentNode.right);
    }
    result.push(...currentLevel);
    leftToRight = !leftToRight;
  }
  return result;
}

module.exports = zigzagLevelOrder;
