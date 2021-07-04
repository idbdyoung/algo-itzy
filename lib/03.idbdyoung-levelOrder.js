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

//input : [3,9,20,null,null,15,7]
//output : [[3],[9,20],[15,7]]

//nodes: [node]
//levelArray: [3]
//nextLevelNodes: [9, 20]


const levelOrder = function(root) {
  const result = [];
  if (!root.length) return result;
  const binaryTree = arrayToBinaryTree(root); //변환
  let nodes = [binaryTree]; // 각 층별로 작업을 해야할 노드들이 들어있는 배열

  while (nodes.length) {
    const levelResult = []; //각 층마다 노드의 값들을 모은 배열
    const nextLevelNodes = []; // 다음 층에서 nodes 대체할 배열

    for (let i = 0; i < nodes.length; i++) {
      //1. node의 값(val)을 levelResult 담기
      if (nodes[i].val !== null) levelResult.push(nodes[i].val);

      //2. node의 left, right 값을 nextLevelNodes 배열에 넣기
      if (nodes[i].left !== null) nextLevelNodes.push(nodes[i].left); //왼쪽
      if (nodes[i].right !== null) nextLevelNodes.push(nodes[i].right); //오른쪽
    }
    //3. nodes를 nextLevelNodes로 교체
    nodes = nextLevelNodes;
    //4. levelArray를 result에 추가
    result.push(levelResult);
  }

  return result;
};

export default levelOrder;
