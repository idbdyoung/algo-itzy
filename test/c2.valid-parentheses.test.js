import { expect } from "chai";
import solution from "../lib/c2.valid-parentheses";

describe("valid-parentheses", function() {
  it("basic case", function() {
    expect(solution("()")).to.eql(true);
    expect(solution("()[]{}")).to.eql(true);
    expect(solution("(]")).to.eql(false);
  });
});