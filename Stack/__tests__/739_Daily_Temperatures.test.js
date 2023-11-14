import { describe, expect, test } from "@jest/globals";
import { dailyTemperatures } from "../739_Daily_Temperatures";

describe("dailyTemperatures should work properly", () => {
  test("checks the base case", () => {
    expect(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])).toStrictEqual([
      1, 1, 4, 2, 1, 1, 0, 0,
    ]);
  });

  test("checks the 2rd case", () => {
    expect(dailyTemperatures([30, 40, 50, 60])).toStrictEqual([1, 1, 1, 0]);
  });

  test("checks the 3rd case", () => {
    expect(dailyTemperatures([30, 60, 90])).toStrictEqual([1, 1, 0]);
  });
});
