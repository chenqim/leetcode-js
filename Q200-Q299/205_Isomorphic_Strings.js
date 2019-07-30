/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 两个 map 实现
var isIsomorphic = function(s, t) {
  let sMap = new Map()
  let tMap = new Map()
  let sArr = s.split('')
  let tArr = t.split('')
  for (let i = 0; i < sArr.length; i++) {
      if (!sMap.has(sArr[i]) && !tMap.has(tArr[i])) {
          sMap.set(sArr[i], tArr[i])
          tMap.set(tArr[i], sArr[i])
      } else {
          if (sMap.get(sArr[i]) !== tArr[i] || tMap.get(tArr[i]) !== sArr[i]) return false
      }
  }
  return true
};

// 一个 map 实现
var isIsomorphic2 = function(s, t) {
  let map = new Map()
  let sArr = s.split('')
  let tArr = t.split('')
  for (let i = 0; i < sArr.length; i++) {
      // 如果不含有这个 key，则往 map 中添加这个键值对
      if (!map.has(sArr[i])) {
          // 避免不同的 key 对应同一个 value 的情况（如果这个 key 对应的 value 值已经出现过，直接 return false）
          if ([...map.values()].indexOf(tArr[i]) > -1) return false
          map.set(sArr[i], tArr[i])
      } else {
          if (map.get(sArr[i]) !== tArr[i]) return false
      }
  }
  return true
};

// 用每一个字母第一次出现的位置来判断
var isIsomorphic3 = function(s, t) {
  let sArr = s.split('')
  let tArr = t.split('')
  for (let i = 0; i < sArr.length; i++) {
      if (sArr.indexOf(sArr[i]) !== tArr.indexOf(tArr[i])) return false
  }
  return true
};

let start = new Date().getTime()
console.log(isIsomorphic('title', 'paper'))
let end = new Date().getTime()
console.log(end - start)