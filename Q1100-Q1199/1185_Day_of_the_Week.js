/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function(day, month, year) {
    let totalDay = 0
    // 计算当年之前的总天数
    for (let i = 1971; i < year; i++) {
        if ((i % 400 === 0) || (i % 100 !== 0 && i % 4 === 0)) totalDay += 366
        else totalDay += 365
    }
    // 计算当年的天数
    if (month === 1) {
        totalDay += day
    } else if (month === 2) {
        totalDay += 31 + day
    } else {
        const arr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        for (let i = 0; i < month - 1; i++) {
            totalDay += arr[i]
        }
        if ((year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0)) totalDay += day + 1
        else totalDay += day
    }

    let c = (totalDay - 1) % 7
    switch(c){
        case 0:
            return 'Friday'
        case 1:
            return 'Saturday'
        case 2:
            return 'Sunday'
        case 3:
            return 'Monday'
        case 4:
            return 'Tuesday'
        case 5:
            return 'Wednesday'
        case 6:
            return 'Thursday'
        default:
            return ''
    }
};

var dayOfTheWeek2 = function(day, month, year) {
    let d = new Date(`${year}-${month}-${day}`)
    const weeks = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    return weeks[d.getDay()]
}

console.log(dayOfTheWeek(18, 7, 1999))