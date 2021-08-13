/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

const buildTree = (preorder, inorder) => {
  const root = new TreeNode();

  const treeBuilder = (root, refArray) => {
      const shiftedPreorder = preorder.shift();
      const nodeIndex = refArray.indexOf(shiftedPreorder);
      const leftRef = refArray.splice(0, nodeIndex);
      root.val = refArray.shift();
      const rightRef = refArray;

      if (leftRef.length) {
          root.left = new TreeNode();
          treeBuilder(root.left, leftRef);
      }

      if (rightRef.length) {
          root.right = new TreeNode();
          treeBuilder(root.right, rightRef);
      }
  };
  treeBuilder(root, inorder);

  return root;
};

export default buildTree;
