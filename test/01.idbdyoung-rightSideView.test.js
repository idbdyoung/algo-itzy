import { expect } from "chai";
import rightSideView from "../lib/01.idbdyoung-rightSideView";

describe("rightSideView", function() {
  it("basic case or edge case", function() {
    expect(rightSideView([1,2,3,null,5,null,4])).to.eql([1,3,4]);
  });
});
