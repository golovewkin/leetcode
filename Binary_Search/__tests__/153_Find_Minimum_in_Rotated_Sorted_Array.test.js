import { describe, expect, test } from "@jest/globals";
import { findMin } from "../153_Find_Minimum_in_Rotated_Sorted_Array";

describe("findMin should work properly", () => {
  test("checks the base case", () => {
    expect(findMin([3, 4, 5, 1, 2])).toEqual(1);
  });

  test("checks the 2nd case", () => {
    expect(findMin([4, 5, 6, 7, 0, 1, 2])).toEqual(0);
  });

  test("checks the 3nd case", () => {
    expect(findMin([11, 13, 15, 17])).toEqual(11);
  });
});
