/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  let arr = n.toString(2).split('')
  let count = 0
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '1') count++
  }
  return count
  // return n.toString(2).replace(/0/g,"").length;
  // let sum = 0
  // while (n) {
  //     n &= n - 1
  //     sum++
  // }
  // return sum
};

console.log(hammingWeight(0b00000000000000000000000000001011))