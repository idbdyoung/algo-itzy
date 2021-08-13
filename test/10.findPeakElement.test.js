import { expect } from "chai";
import findPeakElement from "../lib/10.findPeakElement";

describe("findPeakElement", function() {
  it("basic case", function() {
    expect(findPeakElement([1,2,3,1])).to.eql(2);
  });
  it("basic case", function() {
    expect(findPeakElement([1,2,1,3,5,6,4])).to.eql(5);
  });
});
