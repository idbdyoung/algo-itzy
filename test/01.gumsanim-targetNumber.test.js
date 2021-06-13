import { expect } from "chai";
import solution from "../lib/01.idbdyoung-targetNumber";

describe("solution", function() {
  it("basic case", function() {
    expect(solution([1,1,1,1,1],3)).to.eql(5);
  });
});
