/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let result = []
  if (numRows === 1) return [[1]]
  if (numRows === 2) return [[1], [1, 1]]
  if (numRows >= 3) {
      result = [[1], [1, 1]]
      for (let i = 2; i < numRows; i++) {
          let temp = []
          for (let j = 0; j <= i; j++) {
              // 首尾为1
              if (j === 0 || j === i) {
                  temp.push(1)    
              } else {
                  temp.push(result[i - 1][j - 1] + result[i - 1][j])
              }
          }
          result.push(temp)
      }
  }
  return result
};

console.log(generate(5))