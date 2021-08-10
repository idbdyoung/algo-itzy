import { expect } from "chai";
import searchInsert from "../lib/06.searchInsert";

describe("searchInsert", function() {
  it("basic case", function() {
    expect(searchInsert([1,3,5,6], 5)).to.eql(2);
  });
  it("basic case", function() {
    expect(searchInsert([1,3,5,6], 2)).to.eql(1);
  });
  it("basic case", function() {
    expect(searchInsert([1,3,5,6], 7)).to.eql(4);
  });
  it("basic case", function() {
    expect(searchInsert([1,3,5,6], 0)).to.eql(0);
  });
  it("edge case", function() {
    expect(searchInsert([1], 0)).to.eql(0);
  });
});
