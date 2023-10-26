import { describe, expect, test } from "@jest/globals";
import { twoSum2 } from "../167_Two_Sum _I_Input_Array_Is_Sorted";

describe("twoSum2 should work properly", () => {
  test("checks the base case", () => {
    expect(twoSum2([2, 7, 11, 15], 9)).toStrictEqual([1, 2]);
  });

  test("checks the second case", () => {
    expect(twoSum2([2, 3, 4], 6)).toStrictEqual([1, 3]);
  });

  test("checks with the empty string", () => {
    expect(twoSum2([-1, 0], -1)).toStrictEqual([1, 2]);
  });
});
