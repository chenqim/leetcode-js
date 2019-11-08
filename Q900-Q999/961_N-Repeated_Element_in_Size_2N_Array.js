/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
  const map = new Map()
  for (let i = 0; i < A.length; i++) {
      if (map.has(A[i])) {
          let n = map.get(A[i])
          n++
          map.set(A[i], n)
      } else {
          map.set(A[i], 1)
      }
  }
  for (let [key, value] of map) {
      if (value === A.length / 2) return key
  }
  return -1
};

// 题目的意思是除了那个重复 N 次的数字，其余的数字都不重复，故可以用以下方法，提升效率
var repeatedNTimes2 = function(A) {
  const set = new Set()
  for (let i = 0; i < A.length; i++) {
      if (set.has(A[i])) return A[i]
      else set.add(A[i])
  }
  return -1
};

console.log(repeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4]))