import { expect } from "chai";
import solution from "../lib/c3.palindromeNumber";

describe("palindrome number", function() {
  it("basic case", function() {
    expect(solution(111)).to.eql(true);
    expect(solution(121)).to.eql(true);
    expect(solution(1221)).to.eql(true);
  });
  it("edge case", function() {
    expect(solution(-121)).to.eql(false);
    expect(solution(0)).to.eql(true);
  });
});