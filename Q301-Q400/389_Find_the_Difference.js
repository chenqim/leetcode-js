/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  let sArr = s.split('')
  let tArr = t.split('')
  for (let i = 0; i < tArr.length; i++) {
      let index = sArr.indexOf(tArr[i])
      // 如果存在不同 则直接返回不同的那个字母
      if (index === -1) return tArr[i]
      // 都相同就一个一个的删除，剩下的那个就是多出来的字母
      sArr.splice(index, 1)
      tArr.splice(i, 1)
      i--
  }
  return tArr[0]
};

console.log(findTheDifference('abcd', 'abcde'))