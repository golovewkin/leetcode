import { describe, expect, test } from "@jest/globals";
import { groupAnagrams } from "../49_Group_Anagrams";

describe("groupAnagrams should work properly", () => {
  test("checks the base case", () => {
    expect(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])).toEqual([
      ["eat", "tea", "ate"],
      ["tan", "nat"],
      ["bat"],
    ]);
  });

  test("checks the case with only empty string", () => {
    expect(groupAnagrams([""])).toStrictEqual([[""]]);
  });

  test("checks the case with only 1 letter inside", () => {
    expect(groupAnagrams(["a"])).toStrictEqual([["a"]]);
  });
});
