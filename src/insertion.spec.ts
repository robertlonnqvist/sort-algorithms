import { expect } from "chai";
import { describe, it } from "mocha";
import insertion from "./insertion";

describe("Insertion sort", () => {
  it("should sort array", () => {
    expect(insertion([3, 1, 4, 2])).to.eql([1, 2, 3, 4]);
  });

  it("should should not modify input", () => {
    const input = [3, 1, 4, 2];
    insertion(input);
    expect(input).to.eql([3, 1, 4, 2]);
  });
});
