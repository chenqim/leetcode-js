/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
  return s.trim() === '' ? 0 : s.trim().split(/\s+/).length
};

console.log(countSegments('Of all the gin joints in all the towns in all the world,   '))