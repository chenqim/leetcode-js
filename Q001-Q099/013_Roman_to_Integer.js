/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let result = 0
  let arr = s.split('')
  for (let i = 0; i < arr.length; i++) {
      // 将特殊情况拿出来判断，属于特殊情况的减去自身，其余情况加上自身即可
      // 特殊情况有：IV IX XL XC CD CM
      if (arr[i] === 'I') {
          if (arr[i + 1] === 'V' || arr[i + 1] === 'X') {
              result -= 1
          } else {
              result += 1
          }
      }
      if (arr[i] === 'V') {
          result += 5
      }
      if (arr[i] === 'X') {
          if (arr[i + 1] === 'L' || arr[i + 1] === 'C') {
              result -= 10
          } else {
              result += 10
          }
      }
      if (arr[i] === 'L') {
          result += 50
      }
      if (arr[i] === 'C') {
          if (arr[i + 1] === 'D' || arr[i + 1] === 'M') {
              result -= 100
          } else {
              result += 100
          }
      }
      if (arr[i] === 'D') {
          result += 500
      }
      if (arr[i] === 'M') {
          result += 1000
      }
  }
  return result
};

console.log(romanToInt('MCMXCIV'))