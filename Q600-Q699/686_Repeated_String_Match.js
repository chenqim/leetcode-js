/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function(A, B) {
  const len = 2 * A.length + B.length
  let count = 1
  let s = A
  while (s.length <= len) {
      if (s.indexOf(B) > -1) {
          return count
      }
      s = s.concat(A)
      count++
  }
  return -1
};

console.log(repeatedStringMatch("abc", "cabcabca"))