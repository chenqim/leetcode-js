/**
 * @param {number[][]} M
 * @return {number[][]}
 */
// 写的我老眼昏花，写错了好多次  TAT
var imageSmoother = function(M) {
  const arr = []
  // 循环数组，判断周围是否有值，有的话就加上，最后计算平均值
  for (let i = 0; i < M.length; i++) {
      arr.push([])
      for (let j = 0; j < M[i].length; j++) {
          let temp = 0
          let count = 0
          // 左上
          if (i > 0 && j > 0 && M[i - 1][j - 1] !== undefined) {
              temp += M[i - 1][j - 1]
              count++
          }
          // 正上
          if (i > 0 && M[i - 1][j] !== undefined) {
              temp += M[i - 1][j]
              count++
          }
          // 右上
          if (i > 0 && j < M[i].length - 1 && M[i - 1][j + 1] !== undefined) {
              temp += M[i - 1][j + 1]
              count++
          }
          // 正左
          if (j > 0 && M[i][j - 1] !== undefined) {
              temp += M[i][j - 1]
              count++
          }
          // 自己
          if (M[i][j] !== undefined) {
              temp += M[i][j]
              count++
          }
          // 正右
          if (j < M[i].length - 1 && M[i][j + 1] !== undefined) {
              temp += M[i][j + 1]
              count++
          }
          // 左下
          if (j > 0 && i < M.length - 1 && M[i + 1][j - 1] !== undefined) {
              temp += M[i + 1][j - 1]
              count++
          }
          // 正下
          if (i < M.length - 1 && M[i + 1][j] !== undefined) {
              temp += M[i + 1][j]
              count++
          }
          // 右下
          if (i < M.length - 1 && j < M[i].length - 1 && M[i + 1][j + 1] !== undefined) {
              temp += M[i + 1][j + 1]
              count++
          }
          // 计算平均值并赋值
          arr[i][j] = Math.floor(temp / count)
      }
  }
  return arr
};

console.log(imageSmoother([
  [2,3,4],
  [5,6,7],
  [8,9,10],
  [11,12,13],
  [14,15,16]
]))