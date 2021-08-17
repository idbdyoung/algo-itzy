import { expect } from "chai";
import isSameTree from "../lib/13.isSameTree";
import arrayToBinaryTree from '../lib/02.idbdyoung-arrayToBinaryTree';

describe("isSameTree", function() {
  it("basic case", function() {
    expect(isSameTree(arrayToBinaryTree([1,2]),arrayToBinaryTree([1,null,2]))).to.eql(false);
  });
  it("basic case", function() {
    expect(isSameTree(arrayToBinaryTree([1,2,1]), arrayToBinaryTree([1,1,2]))).to.eql(false);
  });
  it("basic case", function() {
    expect(isSameTree(arrayToBinaryTree([1,2,3]), arrayToBinaryTree([1,2,3]))).to.eql(true);
  });
});