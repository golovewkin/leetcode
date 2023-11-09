import { describe, expect, test } from "@jest/globals";
import { evalRPN } from "../150_Evaluate_Reverse_Polish_Notation";

describe("evalRPN should work properly", () => {
  test("checks the base case", () => {
    expect(evalRPN(["2", "1", "+", "3", "*"])).toEqual(9);
  });

  test("checks the 2 case", () => {
    expect(evalRPN(["4", "13", "5", "/", "+"])).toEqual(4);
  });

  test("checks the 3 case", () => {
    expect(
      evalRPN([
        "10",
        "6",
        "9",
        "3",
        "+",
        "-11",
        "*",
        "/",
        "*",
        "17",
        "+",
        "5",
        "+",
      ]),
    ).toEqual(22);
  });
});
