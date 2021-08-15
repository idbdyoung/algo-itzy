import { expect } from "chai";
import maxDepth from "../lib/12.maxDepth";

describe("maxDepth", function() {
  it("basic case", function() {
    expect(maxDepth([3,9,20,null,null,15,7])).to.eql(3);
  });
  it("basic case", function() {
    expect(maxDepth([1,null,2])).to.eql(2);
  });
  it("basic case", function() {
    expect(maxDepth([1,2,3,4,5])).to.eql(3);
  });
  it("edge case", function() {
    expect(maxDepth([])).to.eql(0);
  });
  it("edge case", function() {
    expect(maxDepth([0])).to.eql(1);
  });
});
