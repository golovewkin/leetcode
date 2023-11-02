// 15. 3Sum
// Medium
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
//
// Notice that the solution set must not contain duplicate triplets.
//
// Example 1:
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
//
// Example 2:
// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
//
// Example 3:
// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
export const threeSum = function (nums) {
  const numbers = nums.sort((a, b) => a - b);
  const res = [];
  for (let i = 0; i < numbers.length - 2; i++) {
    const current = numbers[i];
    if (i > 0 && current === numbers[i - 1]) {
      continue;
    }
    let left = i + 1;
    let right = numbers.length - 1;
    while (left < right) {
      const sum = current + numbers[left] + numbers[right];

      if (sum === 0) {
        res.push([current, numbers[left], numbers[right]]);
        left++;
        while (numbers[left] === numbers[left - 1] && left < right) {
          left++;
        }
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }

  return res;
};
