import { expect } from "chai";
import maximumUnits from "../lib/04.gumsanim-maximumUnitsOnATruck";

describe("maximumUnits", function() {
  it("basic case", function() {
    expect(maximumUnits([[1,3],[2,2],[3,1]],4)).to.eql(8);
  });
});
