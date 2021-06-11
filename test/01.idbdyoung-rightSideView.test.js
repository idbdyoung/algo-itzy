import { expect } from "chai";
import rightSideView from "../lib/01.idbdyoung-rightSideView";

describe("rightSideView", function() {
  it("basic case", function() {
    expect(rightSideView(1)).to.eql(1);
  });
});
