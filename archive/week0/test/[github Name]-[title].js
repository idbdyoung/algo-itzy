import { expect } from "chai";
import getPermutations from "../lib/[github Name]-[title].js";

describe("permutation", function() {
  it("should return all possible combinations", function() {
    expect(getPermutations(["a", "b", "c"])).to.eql([["a", "b", "c"], ["a", "c", "b"], ["b", "a", "c"], ["b", "c", "a"], ["c", "a", "b"], ["c", "b", "a"]]);
  });
});
