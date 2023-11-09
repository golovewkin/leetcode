import { describe, expect, test } from "@jest/globals";
import { generateParenthesis } from "../22_Generate_Parentheses";

describe("generateParenthesis should work properly", () => {
  test("checks the base case", () => {
    expect(generateParenthesis(3)).toEqual([
      "((()))",
      "(()())",
      "(())()",
      "()(())",
      "()()()",
    ]);
  });

  test("checks the 2 case", () => {
    expect(generateParenthesis(1)).toEqual(["()"]);
  });
});
