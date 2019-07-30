/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  // 不去重最后两个测试用例要超时
  // 使用了额外的空间
  let s = new Set(nums)
  let arr = []
  for (let i = 1; i < nums.length + 1; i++) {
      if (!s.has(i)) {
          arr.push(i)
      }
  }
  return arr
};

/*
  热评方法：
  将所有正数作为数组下标，置对应数组值为负值。那么，仍为正数的位置即为（未出现过）消失的数字。
  举个例子：
  原始数组：[4,3,2,7,8,2,3,1]
  重置后为：[-4,-3,-2,-7,8,2,-3,-1]
  结论：[8,2] 分别对应的index为[5,6]（消失的数字）
*/
var findDisappearedNumbers2 = function(nums) {
  for (let i = 0; i < nums.length; i++) {
      nums[Math.abs(nums[i]) - 1] = -Math.abs(nums[Math.abs(nums[i]) - 1])
  }
  let arr = []
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] > 0) {
          arr.push(i + 1)
      }
  }
  return arr
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]))