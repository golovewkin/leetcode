import { two_Sum } from "../1_Two_Sum";
import { describe, expect, test } from "@jest/globals";

describe("twoSum should work properly", () => {
  test("checks the base case", () => {
    expect(two_Sum([2, 7, 11, 15], 9)).toStrictEqual([1, 0]);
  });

  test("checks the second case", () => {
    expect(two_Sum([3, 2, 4], 6)).toStrictEqual([2, 1]);
  });

  test("checks the third case", () => {
    expect(two_Sum([3, 3], 6)).toStrictEqual([1, 0]);
  });
});
