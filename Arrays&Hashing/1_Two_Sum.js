// 1. Two Sum
// Easy
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

// NOTE: Our solution O(n). CAN be a binary search here as the best solution with logN. better with memory
// Also can be solved with 2 Pointers if array is sorted (O(n), memory (O(1)))

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export const two_Sum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i <= nums.length; i++) {
    const current = nums[i];
    const aimValue = target - current;
    const aim = map.get(aimValue);

    if (aim >= 0) {
      return [i, aim];
    } else {
      map.set(current, i);
    }
  }
};
