import { expect } from "chai";
import arrayToBinaryTree, { TreeNode } from "../lib/02.idbdyoung-arrayToBinaryTree";

describe("arrayToBinaryTree", function() {
  it("basic case", function() {
    const binaryTree = new TreeNode(1, new TreeNode(2, null, new TreeNode(5)), new TreeNode(3, null, new TreeNode(4)));
    expect(arrayToBinaryTree([1,2,3,null,5,null,4])).to.eql(binaryTree);
  });
  it("basic case", function() {
    const binaryTree = new TreeNode(1, null, new TreeNode(3));
    expect(arrayToBinaryTree([1,null,3])).to.eql(binaryTree);
  });
});
