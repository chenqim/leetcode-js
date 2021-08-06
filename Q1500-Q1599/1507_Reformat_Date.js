/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function(date) {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const arr = date.split(' ')
  const day = arr[0].substring(0, arr[0].length - 2)
  const month = months.indexOf(arr[1]) + 1
  const year = arr[2]
  return year + '-' + (month < 10 ? '0' : '') + month + '-' + (day < 10 ? '0' : '') + day
};

console.log(reformatDate('26th May 1960'))