// 22. Generate Parentheses
// Medium
// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
//
// Example 1:
// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
//
// Example 2:
// Input: n = 1
// Output: ["()"]

export const generateParenthesis = function (n) {
  const res = [];
  pair("(", n - 1, n);
  return res;

  function pair(current, left, right) {
    if (left === 0 && right === 0) return res.push(current);
    if (left > right) return;
    if (left > 0) pair(current + "(", left - 1, right);
    if (right > 0) pair(current + ")", left, right - 1);
  }
};
