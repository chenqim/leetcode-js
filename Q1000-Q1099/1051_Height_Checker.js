/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
  let count = 0
  const h = heights.concat()
  h.sort((a, b) => a - b)
  for (let i = 0; i < heights.length; i++) {
      if (h[i] !== heights[i]) count++
  }
  return count
};

console.log(heightChecker([1, 1, 4, 2, 1, 3]))