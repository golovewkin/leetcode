import { describe, expect, test } from "@jest/globals";
import { topKFrequent } from "../347_Top_K_Frequent_Elements";

describe("topKFrequent should work properly", () => {
  test("checks the base case", () => {
    expect(topKFrequent([1, 1, 1, 2, 2, 3], 2)).toStrictEqual([1, 2]);
  });

  test("checks the second case with only 1 element inside", () => {
    expect(topKFrequent([1], 1)).toStrictEqual([1]);
  });
});
