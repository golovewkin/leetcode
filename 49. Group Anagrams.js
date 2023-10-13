// 49. Group Anagrams
// Medium
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
//
// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Example 2:
// Input: strs = [""]
// Output: [[""]]

// Example 3:
// Input: strs = ["a"]
// Output: [["a"]]

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strs) {
    const map = new Map();

    for(let i = 0; i < strs.length; i++){
        const current = Array.from(strs[i]).sort().toString();
        const anagrams = map.get(current);
        if(anagrams){
            anagrams.push(strs[i]);
            map.set(current, anagrams);
        } else {
            map.set(current, [strs[i]]);
        }
    }

    return Array.from(map.values());
};