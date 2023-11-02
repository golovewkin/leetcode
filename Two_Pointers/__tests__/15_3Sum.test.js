import { describe, expect, test } from "@jest/globals";
import { threeSum } from "../15_3Sum";

describe("threeSum should work properly", () => {
  test("checks the base case", () => {
    expect(threeSum([-1, 0, 1, 2, -1, -4])).toStrictEqual([
      [-1, -1, 2],
      [-1, 0, 1],
    ]);
  });

  test("checks the second case with eno solution", () => {
    expect(threeSum([0, 1, 1])).toStrictEqual([]);
  });

  test("checks the third case with nulls in array", () => {
    expect(threeSum([0, 0, 0])).toStrictEqual([[0, 0, 0]]);
  });

  test("checks the fourth case with nulls in array", () => {
    expect(threeSum([0, 0, 0, 0])).toStrictEqual([[0, 0, 0]]);
  });

  test("checks the fifth case (will not work if you sort incorrectly)", () => {
    expect(threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4])).toStrictEqual([
      [-4, 0, 4],
      [-4, 1, 3],
      [-3, -1, 4],
      [-3, 0, 3],
      [-3, 1, 2],
      [-2, -1, 3],
      [-2, 0, 2],
      [-1, -1, 2],
      [-1, 0, 1],
    ]);
  });
});
