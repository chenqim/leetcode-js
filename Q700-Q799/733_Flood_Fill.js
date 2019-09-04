/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
  // 如果相同则直接返回原图
  if (image[sr][sc] === newColor) return image
  let oldColor = image[sr][sc]
  // 二维数组中 x 相当于外层数组，y 相当于内层数组
  let dfs = (x, y) => {
      image[x][y] = newColor
      if (x > 0 && image[x - 1][y] === oldColor) dfs(x - 1, y)
      if (x < image.length - 1 && image[x + 1][y] === oldColor) dfs(x + 1, y)
      if (y < image[x].length - 1 && image[x][y + 1] === oldColor) dfs(x, y + 1)
      if (y > 0 && image[x][y - 1] === oldColor) dfs(x, y - 1)
  }
  dfs(sr, sc)
  return image
};

console.log(floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2))