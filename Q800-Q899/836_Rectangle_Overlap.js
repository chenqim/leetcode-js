/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function(rec1, rec2) {
  // 判断不重叠的情况，其余都为重叠
  if (rec2[0] >= rec1[2]) return false
  if (rec2[1] >= rec1[3]) return false
  if (rec2[2] <= rec1[0]) return false
  if (rec2[3] <= rec1[1]) return false
  return true
};

console.log(isRectangleOverlap([0,0,1,1], [1,0,2,1]))