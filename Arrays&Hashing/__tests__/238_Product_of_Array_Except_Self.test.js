import { describe, expect, test } from "@jest/globals";
import { productExceptSelf } from "../238_Product_of_Array_Except_Self";

describe("productExceptSelf should work properly", () => {
  test("checks the base case", () => {
    expect(productExceptSelf([1, 2, 3, 4])).toStrictEqual([24, 12, 8, 6]);
  });

  test("checks the second case with negative values", () => {
    // Jest wants a negative 0 here....
    expect(productExceptSelf([-1, 1, 0, -3, 3])).toEqual([-0, 0, 9, -0, 0]);
  });
});
