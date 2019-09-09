/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  let arr = J.split('')
  let count = 0
  for (let i = 0; i < S.length; i++) {
      if (arr.indexOf(S.charAt(i)) > -1) count++
  }
  return count
};

console.log(numJewelsInStones('aA', 'aAAbbbb'))