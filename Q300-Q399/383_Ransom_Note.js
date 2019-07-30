/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  let rArr = ransomNote.split('')
  let mArr = magazine.split('')
  for (let r of rArr) {
      // 不存在该字母直接返回 false
      if (mArr.indexOf(r) === -1) return false
      // 存在的话要看字母个数够不够（如果赎金信中的字母个数大于杂志中的）
      if (counts(rArr, r) > counts(mArr, r)) return false
  }
  return true
};

// 计算该元素在数组中出现的个数
var counts = (arr, value) => arr.reduce((a, v) => v === value ? a + 1 : a + 0, 0);

var canConstruct2 = function(ransomNote, magazine) {
  let rArr = ransomNote.split('')
  let mArr = magazine.split('')
  for (let i = 0; i < rArr.length; i++) {
      let j = mArr.indexOf(rArr[i])
      // 不存在该字母直接返回 false
      if (j === -1) return false
      // 存在的话将该字母从两个数组中移除
      rArr.splice(i, 1)
      mArr.splice(j, 1)
      i--
  }
  return true
};

console.log(canConstruct2('aa', 'ab'))