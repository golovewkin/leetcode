// https://leetcode.com/problems/search-a-2d-matrix/
// 74. Search a 2D Matrix
// Medium
// You are given an m x n integer matrix matrix with the following two properties:
//
// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.
//
// You must write a solution in O(log(m * n)) time complexity.

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
export const searchMatrix = function (matrix, target) {
  const rowsLength = matrix.length - 1;
  let top = 0;
  let bottom = rowsLength;

  let rowWeNeed;
  while (top <= bottom) {
    const row = Math.floor((bottom + top) / 2);
    const firstEl = matrix[row] && matrix[row][0];
    const lastEl = matrix[row] && matrix[row][matrix[row].length - 1];

    if (lastEl < target) {
      top = row + 1;
    } else if (firstEl > target) {
      bottom = row - 1;
    } else {
      rowWeNeed = row;
      break;
    }
  }

  if (rowWeNeed === undefined) {
    return false;
  }

  let left = 0;
  let right = matrix[0].length - 1;
  const currentRow = matrix[rowWeNeed];
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const current = currentRow[middle];
    if (current === target) {
      return true;
    }

    if (current > target) {
      right = middle - 1;
    } else if (current < target) {
      left = middle + 1;
    }
  }

  return false;
};
