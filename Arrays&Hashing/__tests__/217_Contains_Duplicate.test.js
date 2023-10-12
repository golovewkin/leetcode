import { describe, expect, test } from "@jest/globals";
import { containsDuplicate } from "../217_Contains_Duplicate";

describe("containsDuplicate should work properly", () => {
  test("checks the base case", () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBeTruthy();
  });

  test("checks the second case", () => {
    expect(containsDuplicate([1, 2, 3, 4])).toBeFalsy();
  });

  test("checks the third case", () => {
    expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBeTruthy();
  });
});
