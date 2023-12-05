import { describe, expect, test } from "@jest/globals";
import { minEatingSpeed } from "../875_Koko_Eating_Bananas";

describe("minEatingSpeed should work properly", () => {
  test("checks the base case", () => {
    expect(minEatingSpeed([3, 6, 7, 11], 8)).toEqual(4);
  });

  test("checks the 2 case", () => {
    expect(minEatingSpeed([30, 11, 23, 4, 20], 5)).toEqual(30);
  });

  test("checks the 3rd case", () => {
    expect(minEatingSpeed([3, 6, 7, 11], 6)).toEqual(4);
  });
});
