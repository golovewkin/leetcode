import { describe, expect, test } from "@jest/globals";
import { carFleet } from "../853_Car_Fleet";

describe("carFleet should work properly", () => {
  test("checks the base case", () => {
    expect(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3])).toStrictEqual(3);
  });

  test("checks the 2 case", () => {
    expect(carFleet(12, [10], [3])).toStrictEqual(1);
  });

  test("checks the 3 case", () => {
    expect(carFleet(100, [0, 2, 4], [4, 2, 1])).toStrictEqual(1);
  });
});
