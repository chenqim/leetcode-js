/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
  let a = 0 // 缺勤次数
  let l = 0 // 迟到次数
  for (let i = 0; i < s.length; i++) {
      if (s.charAt(i) === 'A') a++
      if (a > 1) return false
      if (s.charAt(i) === 'L' && s.charAt(i + 1) === 'L' && s.charAt(i + 2) === 'L') l++
      if (l > 0) return false
  }
  return true
};

console.log(checkRecord('PPALLP'))