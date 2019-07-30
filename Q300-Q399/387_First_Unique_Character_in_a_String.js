/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let sArr = s.split('')
  let map = new Map()
  for (let i = 0; i < sArr.length; i++) {
      if (!map.has(sArr[i])) {
          map.set(sArr[i], 1)
      } else {
          map.set(sArr[i], map.get(sArr[i]) + 1)
      }
  }
  for (let [key, value] of map.entries()) {
    if (value === 1) {
        return sArr.indexOf(key)
    }
  }
  return -1
};

var firstUniqChar2 = function(s) {
  let sArr = s.split('')
  // 利用第一次出现的位置是否与最后一次出现的位置的下标判断是否一致
  for (let i = 0; i < sArr.length; i++) {
      if (sArr.indexOf(sArr[i]) === i && sArr.lastIndexOf(sArr[i]) === i) {
          return i
      }
  }
  return -1
};

console.log(firstUniqChar('loveleetcode'))