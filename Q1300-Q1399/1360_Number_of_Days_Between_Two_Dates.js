/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function(date1, date2) {
    const dayTo1971 = (year, month, day) => {
        year = Number(year)
        month = Number(month)
        day = Number(day)
        let result = 0
        // 当年之前的天数
        for (let i = 1971; i < year; i++) {
            if (isLeapYear(i)) {
                result += 366
            } else {
                result += 365
            }
        }
        // 当年的天数
        const days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        if (month > 2) {
            // 当月之前天数
            for (let i = 1; i < month; i++) {
                result += days[i]
            }
            // 当月天数
            result += day
            // 闰年 +1 天
            if (isLeapYear(year)) result++
        } else if (month === 2) {
            result += 31 + day
        } else {
            result += day
        }
        return result
    }

    const isLeapYear = (year) => {
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) return true
        return false
    }

    const arr1 = date1.split('-')
    const arr2 = date2.split('-')

    return Math.abs(dayTo1971(arr1[0], arr1[1], arr1[2]) - dayTo1971(arr2[0], arr2[1], arr2[2]))
};

console.log(daysBetweenDates('2020-01-15', '2019-12-31'))