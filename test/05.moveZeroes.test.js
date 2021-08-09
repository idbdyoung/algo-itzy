import { expect } from "chai";
import moveZeroes from "../lib/05.moveZeroes";

describe("moveZeroes", function() {
  it("basic case", function() {
    expect(moveZeroes([0,1,0,3,12])).to.eql([1,3,12,0,0]);
  });
  it("edge case", function() {
    expect(moveZeroes([0])).to.eql([0]);
  });
});
