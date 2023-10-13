// 36. Valid Sudoku
// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
//
// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function (board) {
  // vertival = the same index
  // horizontal - the same array
  let findDuplicate = false;
  for (let i = 0; i < board.length; i++) {
    const currentRow = board[i];

    // visit all horizontal values
    const currentHorizontalMap = {};
    for (let j = 0; j < currentRow.length; j++) {
      if (currentHorizontalMap[j]) {
        findDuplicate = true;
        break;
      } else {
        currentHorizontalMap[j] = true;
      }
    }

    if (findDuplicate) {
      return findDuplicate;
    }

    // visit all vertical values
    const currentVerticalMap = {};
    for (let j = 0; j < currentRow.length; j++) {
      if (currentHorizontalMap[j]) {
        findDuplicate = true;
        break;
      } else {
        currentHorizontalMap[j] = true;
      }
    }

    return findDuplicate;
  }
};

const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log(isValidSudoku(board));
