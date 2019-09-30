/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
  let arr = seats.join('').split('1')
  let max = 0
  let index = 0
  for (let i = 0; i < arr.length;  i++) {
      if (arr[i].length > max) {
          max = arr[i].length
      }
  }
  return Math.max(arr[0].length, Math.ceil(max / 2), arr[arr.length - 1].length)
};

console.log(maxDistToClosest([1,0,0,0]))