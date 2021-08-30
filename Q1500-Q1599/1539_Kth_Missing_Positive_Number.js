/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
 var findKthPositive = function(arr, k) {
  // const newArr = [...Array(k + arr.length)].map((k, i) => i + 1)
  // console.log(newArr)
  // for (let i = 0; i < arr.length; i++) {
  //     const index = newArr.indexOf(arr[i])
  //     if (index > -1) {
  //         newArr.splice(index, 1)
  //     }
  // }
  // console.log(newArr)
  // return newArr[k - 1]
  const result = []
  for (let i = 1; i < 9999; i++) {
      if (result.length === k) return result[k - 1]
      if (!arr.includes(i)) {
          result.push(i)
      }
  }
  return result[k - 1]
};

console.log(findKthPositive([2, 3, 4, 7, 11], 5))