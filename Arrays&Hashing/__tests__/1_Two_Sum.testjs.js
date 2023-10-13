import { two_Sum } from "../1_Two_Sum";
import { describe, expect, test } from "@jest/globals";

describe("twoSum should work", () => {
  test("checks the base case", () => {
    expect(two_Sum([2, 7, 11, 15], 9)).toStrictEqual([1, 0]);
  });
});
