import { describe, expect, test } from "@jest/globals";
import { searchMatrix } from "../74_Search_a_2D_Matrix";

describe("MinStack should work properly", () => {
  test("checks the base case", () => {
    expect(
      searchMatrix(
        [
          [1, 3, 5, 7],
          [10, 11, 16, 20],
          [23, 30, 34, 60],
        ],
        3,
      ),
    ).toBeTruthy();
  });

  test("checks the 2nd case", () => {
    expect(
      searchMatrix(
        [
          [1, 3, 5, 7],
          [10, 11, 16, 20],
          [23, 30, 34, 60],
        ],
        13,
      ),
    ).toBeFalsy();
  });

  test("checks the 3nd case", () => {
    expect(searchMatrix([[1]], 1)).toBeTruthy();
  });

  test("checks the 4nd case", () => {
    expect(searchMatrix([[1, 1]], 2)).toBeFalsy();
  });

  test("checks the 5nd case", () => {
    expect(searchMatrix([[1, 3]], 3)).toBeTruthy();
  });
});
