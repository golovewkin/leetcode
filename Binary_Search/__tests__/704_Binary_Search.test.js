import { describe, expect, test } from "@jest/globals";
import { binarySearch } from "../704_Binary_Search";

describe("binarySearch should work properly", () => {
  test("checks the base case", () => {
    expect(binarySearch([-1, 0, 3, 5, 9, 12], 9)).toEqual(4);
  });

  test("checks the 2nd case", () => {
    expect(binarySearch([-1, 0, 3, 5, 9, 12], 2)).toEqual(-1);
  });
});
