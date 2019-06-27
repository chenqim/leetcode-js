/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let arr = n.toString().split('')
  // 已经出现过的数字数组
  let temp = []
  while (true) {
      let sum = 0
      for (let i = 0; i < arr.length; i++) {
          sum += Math.pow(Number(arr[i]), 2)
      }
      // 为1就是快乐数
      if (sum === 1) return true
      // 如果存在则直接跳出循环（因为已存在的会进入一个循环永远都不会是一个快乐数）
      if (temp.indexOf(sum) > -1) return false
      // 如果不存在则将其放入数组中
      temp.push(sum)
      // 重新给 arr 赋值
      arr = sum.toString().split('')
  }
};

console.log(isHappy(101))