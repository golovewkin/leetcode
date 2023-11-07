import { describe, expect, test } from "@jest/globals";
import { isValid } from "../20_Valid_Parentheses";

describe("isValid should work properly", () => {
  test("checks the base case", () => {
    expect(isValid("()")).toBeTruthy();
  });

  test("checks the 2d case", () => {
    expect(isValid("()[]{}")).toBeTruthy();
  });

  test("checks the 3d case", () => {
    expect(isValid("(]")).toBeFalsy();
  });
});
