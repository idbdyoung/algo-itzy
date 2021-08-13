import { expect } from "chai";
import buildTree from "../lib/09.buildTree";
import arrayToBinaryTree from "../lib/02.idbdyoung-arrayToBinaryTree";

describe("buildTree", function() {
  it("basic case", function() {
    expect(buildTree([3,9,20,15,7], [9,3,15,20,7])).to.eql(arrayToBinaryTree([3,9,20,null,null,15,7]));
  });
  it("basic case", function() {
    expect(buildTree([1,2,4,6,5,3,7,9,8,10,11], [6,4,2,5,1,9,7,3,10,8,11])).to.eql(arrayToBinaryTree([1,2,3,4,5,7,8,6,null,null,null,9,null,10,11]));
  });
});
