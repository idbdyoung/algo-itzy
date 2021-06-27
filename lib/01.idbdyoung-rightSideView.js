import arrayToBinaryTree from "./02.idbdyoung-arrayToBinaryTree";

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

 const rightSideView = (root) => {
  const binaryTree = arrayToBinaryTree(root);
  const result = [];

  const dfs = (arr, level, root) => {
      if (!root) return;
      if (level === arr.length) {
          arr.push(root.val);
      }
      dfs(arr, level + 1, root.right);
      dfs(arr, level + 1, root.left);
  };

  if (!root) return result;
  dfs(result, 0, binaryTree);

  return result;
};

export default rightSideView;