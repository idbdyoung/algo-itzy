import { expect } from "chai";
import longestZigZag from "../lib/14.longestZigZag";
import arrayToBinaryTree from '../lib/02.idbdyoung-arrayToBinaryTree';

describe("longestZigZag", function() {
  it("basic case", function() {
    expect(longestZigZag(arrayToBinaryTree([1,null,1,1,1,null,null,1,1,null,1,null,null,null,1,null,1]))).to.eql(3);
  });
  it("basic case", function() {
    expect(longestZigZag(arrayToBinaryTree([1,1,1,null,1,null,null,1,1,null,1]))).to.eql(4);
  });
  it("basic case", function() {
    expect(longestZigZag(arrayToBinaryTree([1]))).to.eql(0);
  });
});
