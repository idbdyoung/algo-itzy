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
 * @return {number[][]}
 */
const zigzagLevelOrder = function(root) {
  const tree = arrayToBinaryTree(root);
  const result = [];
  let nodes = [tree];
  let isRightSideFirst = true;

  while (nodes.length) {
    const levelResult = [];
    const newNodes = [];

    for (let i = 0; i < nodes.length; i++) { //1. level 결과 도출
      if (nodes[i].val !== null) levelResult.push(nodes[i].val);
    }
    result.push(levelResult);

    if (isRightSideFirst) { //2. 방향에 따른 노드 작업
      for (let i = nodes.length - 1; i >= 0; i--) { // 오른쪽을 넣을때는 오른쪽부터
        if (nodes[i].right !== null) newNodes.push(nodes[i].right);
        if (nodes[i].left !== null) newNodes.push(nodes[i].left);
      }
    } else {
      for (let i = 0; i < nodes.length; i++) { //왼쪽을 넣을때는 왼쪽 부터
        if (nodes[i].left) newNodes.push(nodes[i].left);
        if (nodes[i].right) newNodes.push(nodes[i].right);
      }
    }
    nodes = newNodes; //3. nodes 변경
    isRightSideFirst = !isRightSideFirst; //4. 방향 변경s
  }

  return result;
};



export default zigzagLevelOrder;
