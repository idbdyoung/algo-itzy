import { expect } from "chai";
import relativeSortArray from "";

describe("relativeSortArray", function() {
  it("basic case", function() {
    expect(relativeSortArray(
        [2,3,1,3,2,4,6,7,9,2,19],[2,1,4,3,9,6]))
        .to.eql(
            [2,2,2,1,4,3,3,9,6,7,19]
        );
  });
});
