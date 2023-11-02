import { describe, expect, test } from "@jest/globals";
import { trap } from "../42_Trapping_Rain_Water";

describe("trap should work properly", () => {
  test("checks the base case", () => {
    expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toEqual(6);
  });

  test("checks the second case", () => {
    expect(trap([4, 2, 0, 3, 2, 5])).toEqual(9);
  });
});
