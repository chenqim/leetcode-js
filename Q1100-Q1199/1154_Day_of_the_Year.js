/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
    const dArr = date.split('-')
    const year = Number(dArr[0])
    const month = Number(dArr[1])
    const day = Number(dArr[2])
    const mArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    if (month === 1) {
        return day
    } else if (month === 2) {
        return mArr[0] + day
    } else {
        let sum = 0
        for (let i = 0; i < month - 1; i++) {
            sum += mArr[i]
        }
        if ((year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0)) return sum + day + 1
        else return sum + day
    }
};

console.log(dayOfYear('2019-03-01'))