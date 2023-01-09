/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
  const len = s.length
  const tmp = []
  let i = 0
  while (i < len) {
    const ch = s.charAt(i)
    const last = tmp[tmp.length - 1] // 缓存数组中最后一个字符串
    if (last && Math.abs(ch.charCodeAt() - last.charCodeAt()) === 32) {
      tmp.pop()
    } else {
      tmp.push(ch)
    }
    i++
  }
  return tmp.join('')
}

console.log(makeGood('leEeetcode'))