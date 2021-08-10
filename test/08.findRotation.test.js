import { expect } from "chai";
import findRotation from "../lib/08.findRotation";

describe("findRotation", function() {
  it("basic case", function() {
    expect(findRotation([[0,1],[1,0]], [[1,0],[0,1]])).to.eql(true);
  });
  it("basic case", function() {
    expect(findRotation([[0,1],[1,1]], [[1,0],[0,1]])).to.eql(false);
  });
  it("basic case", function() {
    expect(findRotation([[0,0,0],[0,1,0],[1,1,1]], [[1,1,1],[0,1,0],[0,0,0]])).to.eql(true);
  });
});
