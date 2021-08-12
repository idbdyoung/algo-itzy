import { expect } from "chai";
import pivotIndex from "../lib/07.pivotIndex";

describe("pivotIndex", function() {
  it("basic case", function() {
    expect(pivotIndex([1,7,3,6,5,6])).to.eql(3);
  });
  it("basic case", function() {
    expect(pivotIndex([1,2,3])).to.eql(-1);
  });
  it("basic case", function() {
    expect(pivotIndex([2,1,-1])).to.eql(0);
  });
  it("edge case", function() {
    expect(pivotIndex([-1,-1,-1,-1,-1,-1])).to.eql(-1);
  });
  it("edge case", function() {
    expect(pivotIndex([-1,-1,-1,-1,-1,0])).to.eql(2);
  });
});
