import { expect } from "chai";
import solution from "../lib/1.로또의 최고 순위와 최저 순위";

describe("rightSideView", function() {
  it("basic case", function() {
    expect(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19])).to.eql([3, 5]);
  });
  it("edge case", function() {
    expect(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25])).to.eql([1, 6]);
    expect(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35])).to.eql([1, 1]);
  });
});
