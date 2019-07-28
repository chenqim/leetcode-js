/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  let arr = []
  for (let i = 0; i < nums1.length; i++) {
      // 找到 nums1[i] 在 nums2中的下标
      let index = nums2.indexOf(nums1[i])
      // 如果刚好位于 nums2 的最后一个则说明后面不存在更大的数字了
      if (index === nums2.length - 1) {
          arr.push(-1)
      } else {
          // 循环 nums2 中后面的元素 找出比 nums1[i] 更大的元素
          for (let j = index + 1; j < nums2.length; j++) {
              if (nums2[j] > nums1[i]) {
                  arr.push(nums2[j])
                  break
              }
              // 找到最后还是没有找到更大的则说明不存在
              if (j === nums2.length - 1) {
                  if (nums2[j] > nums1[i]) {
                      arr.push(nums2[j])
                  } else {
                      arr.push(-1)
                  }
                  break
              }
          }
      }
  }
  return arr
};

console.log(nextGreaterElement([4,1,2], [1,3,4,2]))