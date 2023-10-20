import { describe, expect, test } from "@jest/globals";
import { isPalindrome } from "../125_Valid_Palindrome";

describe("isPalindrome should work properly", () => {
  test("checks the base case", () => {
    expect(isPalindrome("A man, a plan, a canal: Panama")).toBeTruthy();
  });

  test("checks the second case", () => {
    expect(isPalindrome("race a car")).toBeFalsy();
  });

  test("checks with the empty string", () => {
    expect(isPalindrome(" ")).toBeTruthy();
  });
});
