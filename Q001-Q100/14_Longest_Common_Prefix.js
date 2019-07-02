/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  // 需要考虑为空和只有一个的特殊情况
  if (!strs.length) return ''
  if (strs.length === 1) return strs[0]
  let result = ''
  let index = 1
  while (1) {
      let f = strs[0].substr(0, index)
      for (let i = 1; i < strs.length; i++) {
          if (strs[i].substr(0, index) !== f) {
              return result
          }
      }
      // ['', '']，['c', 'c'] 完全相同的情况
      if (f === result) {
          return result
      } else {
          // 说明 strs 中的每一个单词都包含该前缀
          result = f   
      }
      // 继续开始下一轮循环，前缀长度加 1
      index++
  }
};

console.log(longestCommonPrefix(["flower","flow","flight"]))