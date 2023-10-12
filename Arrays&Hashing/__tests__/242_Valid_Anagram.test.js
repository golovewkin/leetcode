import { describe, expect, test } from "@jest/globals";
import { isAnagram } from "../242_Valid_Anagram";

describe("isAnagram should work properly", () => {
  test("checks the base case", () => {
    expect(isAnagram("anagram", "nagaram")).toBeTruthy();
  });

  test("checks the second case", () => {
    expect(isAnagram("rat", "car")).toBeFalsy();
  });
});
