/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  let i = 1
  let result = '1'
  while (i < n) {
      let arr = result.split('')
      // 记录读法
      let count = ''
      // 用于记录指针的位置，方便计算各种数字的个数
      let index = 0
      // 这里只循环到倒数第二的元素
      // 如果倒数第二个元素跟最后一个元素不一样，则会计算最后一个元素之前所有读法
      // 如果相同，则说明前面还有可能有相同的，则去下面计算读法
      for (let j = 0; j < arr.length - 1; j++) {
        if (arr[j] === arr [j + 1]) {
              // 如果相同则继续往后面找
              continue
          } else {
              // 如果不同了则记录前面相同数的个数，并生成他的读法
              count += (j + 1 - index).toString() + arr[j].toString()
              index = j + 1
          }
      }
      // 这里是计算最后一个或者几个数字的读法
      count += (arr.length - index).toString() + arr[arr.length - 1].toString()
      result = count
      i++
  }
  return result
};

console.log(countAndSay(3))