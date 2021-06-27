import { expect } from "chai";
import levelOrder from "../lib/03.idbdyoung-levelOrder";

describe("levelOrder", function() {
  it("basic case", function() {
    expect(levelOrder([3,9,20,null,null,15,7])).to.eql([[3],[9,20],[15,7]]);
  });
  it("basic case", function() {
    expect(levelOrder([1,2,null,3,null,null,7,8,9,10,11,12,13])).to.eql([[1],[2],[3],[7],[8,9],[10,11,12,13]]);
  });
  it("basic case", function() {
    expect(levelOrder([3,9,20,null,null,15,7])).to.eql([[3],[9,20],[15,7]]);
  });
  it("edge case", function() {
    expect(levelOrder([1])).to.eql([[1]]);
  });
  it("edge case", function() {
    expect(levelOrder([])).to.eql([]);
  });
});
