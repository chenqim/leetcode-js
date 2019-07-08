/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  // 可以直接用函数 indexOf()，效率比较高
  if (needle === '') return 0
  let arr = haystack.split('')
  let arr2 = needle.split('')
  for (let i = 0; i < arr.length; i++) {
      let flag = true
      // 找到第一个相等的位置
      if (arr[i] === arr2[0]) {
          for (let j = 1; j < arr2.length; j++) {
              // 然后循环比较后面的是不是一样，不一样则结束循环
              if (arr[j + i] !== arr2[j]) {
                flag = false
                break
              }
          }
          // flag 为 true 的时候则说明后面的都是一样的，返回下标 i 即可
          if (flag) return i
      }
  }
  return -1
};

console.log(strStr('mississippi', 'issip'))