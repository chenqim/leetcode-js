/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 方法一 普通方法 效率比较低
var searchInsert = function(nums, target) {
  let index = 0
  let i = nums.indexOf(target)
  if (i > -1) {
      // 如果存在则直接把下标赋值给 index
      index = i
  } else {
      // 不存在的话将 target 插入数组
      nums.push(target)
      // 利用 sort 排序
      nums.sort((a, b) => {
          return a - b
      })
      // 下标赋值
      index = nums.indexOf(target)
  }
  return index
};
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 方法二 二分法 效率比较高
var searchInsert2 = function(nums, target) {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
      let mid = Math.floor((left + right) / 2)
      if (target === nums[mid]) {
          return mid
      } else if (target < nums[mid]) {
          right = mid - 1
      } else if (target > nums[mid]) {
          left = mid + 1
      }
  }
  return left
};

console.log(searchInsert2([1,3,5,6], 2))