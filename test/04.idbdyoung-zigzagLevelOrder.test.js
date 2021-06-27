import { expect } from "chai";
import levelOrder from "../lib/04.idbdyoung-zigzagLevelOrder";

describe("zigzagLevelOrder", function() {
  it("basic case", function() {
    expect(levelOrder([3,9,20,null,null,15,7])).to.eql([[3],[20,9],[15,7]]);
  });
});
