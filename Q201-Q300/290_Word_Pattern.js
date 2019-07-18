/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  debugger
  let map = new Map();
  let pArr = pattern.split('')
  let sArr = str.split(' ')
  if (pArr.length !== sArr.length) return false
  // 如果不含有这个 key，则往 map 中添加这个键值对
  for (let i = 0; i < pArr.length; i++) {
      if (!map.has(pArr[i])) {
          // 如果不存在键，但值存在，也返回 false
          // 避免不同的 key 对应同一个 value 的情况（如果这个 key 对应的 value 值已经出现过，直接 return false）
          if ([...map.values()].indexOf(sArr[i]) !== -1) return false
          map.set(pArr[i], sArr[i])
      } else {
          if (map.get(pArr[i]) !== sArr[i]) return false
      }
  }
  return true
};

console.log(wordPattern('abba', 'dog cat cat dog'))