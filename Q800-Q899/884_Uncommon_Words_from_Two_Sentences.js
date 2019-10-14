/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
  debugger
  let map = new Map()
  let arrA = A.split(' ')
  let arrB = B.split(' ')
  let arrC = arrA.concat(arrB)
  let result = []
  for (let i = 0; i < arrC.length; i++) {
      if (map.has(arrC[i])) {
          let temp = map.get(arrC[i])
          temp++
          map.set(arrC[i], temp)
      } else {
          map.set(arrC[i], 1)
      }
  }
  for (let [key, value] of map) {
      if (value === 1) result.push(key)
  }
  return result
};

console.log(uncommonFromSentences('this apple is sweet', 'this apple is sour'))