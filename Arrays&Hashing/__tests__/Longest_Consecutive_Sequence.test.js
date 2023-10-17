import { describe, expect, test } from "@jest/globals";
import { longestConsecutive } from "../128_Longest_Consecutive_Sequence";

describe("longestConsecutive should work properly", () => {
  test("checks the first case", () => {
    expect(longestConsecutive([100, 4, 200, 1, 3, 2])).toEqual(4);
  });

  test("checks the second case", () => {
    expect(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])).toEqual(9);
  });
});
