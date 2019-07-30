/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
      for (let j = i + 1; j < numbers.length; j++) {
          if (numbers[i] + numbers[j] === target) return [i + 1, j + 1]
      }
  }
};

// 方法二：利用已经排序的特点，用双指针
var twoSum2 = function(numbers, target) {
  let low = 0
  let high = numbers.length - 1
  while (low < high) {
      if (numbers[low] + numbers[high] === target) return [low + 1, high + 1]
      if (numbers[low] + numbers[high] > target) high--
      if (numbers[low] + numbers[high] < target) low++
  }
};

console.log(twoSum2([2, 7, 11, 15], 9))