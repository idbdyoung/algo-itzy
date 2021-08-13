import { expect } from "chai";
import solution from "../lib/11.advanced1";

describe("advanced1", function() {
  it("basic case", function() {
    expect(solution([[1,0,0],[1,1,0],[1,1,0],[1,0,1],[1,1,0],[0,1,1]], 2)).to.eql(4);
  });
});
