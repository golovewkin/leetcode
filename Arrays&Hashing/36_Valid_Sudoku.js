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
export const isValidSudoku = function (board) {
  const set = new Set();

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const cell = board[i][j];
      if (cell === ".") continue;
      const row = `row: ${i}, value: ${cell}`;
      const column = `column: ${j}, value: ${cell}`;
      const boxNumber = 3 * Math.floor(i / 3) + Math.floor(j / 3);
      const box = `boxNumber: ${boxNumber}, value: ${cell}`;
      if (set.has(row) || set.has(column) || set.has(box)) return false;
      set.add(row).add(column).add(box);
    }
  }
  return true;
};
