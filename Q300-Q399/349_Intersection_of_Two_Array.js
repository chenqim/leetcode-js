/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  // 先利用 Set 去重
  let set1 = new Set(nums1)
  let set2 = new Set(nums2)
  // 方法一
  let arr = []
  for (let k of set1.keys()) {
      if (set2.has(k)) {
          arr.push(k)
      }
  }
  return arr
  // 方法二
  // return [...set1].filter(x => set2.has(x))
};

console.log(intersection([1,2,2,1], [2,2]))