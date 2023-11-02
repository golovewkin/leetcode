import { describe, expect, test } from "@jest/globals";
import { maxArea } from "../11_Container_With_Most_Water";

describe("maxArea should work properly", () => {
  test("checks the base case", () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toEqual(49);
  });

  test("checks the second case", () => {
    expect(maxArea([1, 1])).toEqual(1);
  });
});
