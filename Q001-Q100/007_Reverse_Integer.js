/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let result = 0
  if (x > 0) {
      let arr = x.toString().split('')
      let arrR = arr.reverse()
      if (arrR[0] === '0') {
          arrR.splice(0, 1)
      }
      result = f(Number(arrR.join('')))
  } else if (x < 0) {
      let arr = x.toString().split('')
      let arrR = arr.reverse()
      // 去掉负号
      arrR.splice(arrR.length - 1, 1)
      if (arrR[0] === '0') {
          arrR.splice(0, 1)
      }
      result = f(-Number(arrR.join('')))
  } else {
      result = 0
  }
  return result
};

var f = function(x) {
  if (x >= Math.pow(-2, 31) && x <= Math.pow(2, 31) - 1) {
      return x
  } else {
      return 0
  }
};

console.log(reverse(12134572))