/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// 方法1 合并数组吼排序
var merge = function(nums1, m, nums2, n) {
    for (let i = 0; i < n; i++) {
        nums1[m + i] = nums2[i]
    }
    nums1.sort((a, b) => {
        return a - b
    })
    return nums1
};
// 方法2
var merge2 = function(nums1, m, nums2, n) {
    // 去掉 nums1 中后面多余的 0
    nums1.splice(m, n)
    if (m === 0) {
        // 如果 nums1 为空，则将 nums2 的值赋给 nums1
        for (n of nums2) nums1.push(n)
    } else {
        // 循环 nums2
        for (let i = 0; i < n; i++) {
          if (nums2[i] <= nums1[0]) {
                // 如果比 nums1 中的第一个数据小，则在最前面插入
                nums1.unshift(nums2[i])
            } else if (nums2[i] >= nums1[nums1.length - 1]) {
                // 如果比 nums1 中的最后一个数据大，则在最后面插入
                nums1.push(nums2[i])
            } else {
                // 如果在中间的就循环找到合适的位置插入
                for (let j = 0; j < nums1.length; j++) {
                    if (nums2[i] >= nums1[j] && nums2[i] <= nums1[j + 1]) {
                        nums1.splice(j + 1, 0, nums2[i])
                        break
                    }
                }
            }
        } 
    }
    return nums1
}

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3))
console.log(merge2([1,2,3,0,0,0], 3, [2,5,6], 3))