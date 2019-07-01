/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  if (s.trim() === '') {
      return 0
  } else {
      return s.trim().split(' ').pop().length
  }
};

console.log(lengthOfLastWord('Hello World'))