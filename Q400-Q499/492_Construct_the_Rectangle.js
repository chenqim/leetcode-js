/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
  let a = Math.ceil(Math.sqrt(area))
  while (1) {
      if (area % a === 0) {
          return [a, area / a]
      }
      a++
  }
};

console.log(constructRectangle(99))