// 347. Top K Frequent Elements
// Medium
// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
//
//
//
// Example 1:
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
//
// Example 2:
// Input: nums = [1], k = 1
// Output: [1]

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function(nums, k) {
    const frequency = new Map();
    for(const num of nums ) {
        let current = frequency.get(num);
        frequency.set(num, current != null ? ++current : 1);
    }

    const buckets = [];
    frequency.forEach((amount, value) => {
        buckets.push({amount, value});
    });
    buckets.sort(((a, b) => b.amount - a.amount))

    return buckets.slice(0, k).map(({value}) => value)
};