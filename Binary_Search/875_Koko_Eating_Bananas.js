// 875. Koko Eating Bananas
// Medium
// Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.
// Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.
// Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.
// Return the minimum integer k such that she can eat all the bananas within h hours.

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
export const minEatingSpeed = function (piles, h) {
  let left = 0;
  const max = Math.max(...piles);
  let right = max;
  let res = max;

  while (left <= right) {
    const current = Math.floor((left + right) / 2);
    let hours = piles.reduce((acc, item) => {
      acc += Math.ceil(item / current);
      return acc;
    }, 0);

    if (hours <= h) {
      res = Math.min(current, res);
      right = current - 1;
    } else {
      left = current + 1;
    }
  }

  return res;
};
