import { expect } from "chai";
import frequencySort from "../lib/03.gumsanim-sortArrayByIncreasingFrequency";

describe("frequencySort", function() {
  it("basic case", function() {
    expect(frequencySort([-1,1,-6,4,5,-6,1,4,1])).to.eql([5,-1,4,4,-6,-6,1,1,1]);
  });
});
