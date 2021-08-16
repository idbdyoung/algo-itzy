import { expect } from "chai";
import maxDepth from "../lib/12.maxDepth";
import arrayToBinaryTree from '../lib/02.idbdyoung-arrayToBinaryTree';

describe("maxDepth", function() {
  it("basic case", function() {
    expect(maxDepth(arrayToBinaryTree([3,9,20,null,null,15,7]))).to.eql(3);
  });
  it("basic case", function() {
    expect(maxDepth(arrayToBinaryTree([1,null,2]))).to.eql(2);
  });
  it("basic case", function() {
    expect(maxDepth(arrayToBinaryTree([1,2,3,4,5]))).to.eql(3);
  });
  it("edge case", function() {
    expect(maxDepth(arrayToBinaryTree([]))).to.eql(0);
  });
  it("edge case", function() {
    expect(maxDepth(arrayToBinaryTree([0]))).to.eql(1);
  });
});
