/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  // 调用 s.reverse() 更方便哟
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
      // s[i] 跟 s[s.length - i - 1] 互换，也就是第一个跟最后一个互换，第二个跟倒数第二个互换，以此类推
      let temp
      temp = s[i]
      s[i] = s[s.length - i - 1]
      s[s.length - i - 1] = temp
  }
};

let s = ['h', 'e', 'l', 'l', 'o']
reverseString(s)
console.log(s)