// 20. Valid Parentheses
// Easy
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//
// An input string is valid if:
//
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
//
// Example 1:
// Input: s = "()"
// Output: true
//
// Example 2:
// Input: s = "()[]{}"
// Output: true
//
// Example 3:
// Input: s = "(]"
// Output: false

/**
 * @param {string} s
 * @return {boolean}
 */
export const isValid = function (s) {
  const stack = [];
  const brackets = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (const element of s) {
    if (brackets[element]) {
      const last = stack.pop();
      if (last !== brackets[element]) {
        return false;
      }
    } else {
      stack.push(element);
    }
  }

  return !stack.length;
};
