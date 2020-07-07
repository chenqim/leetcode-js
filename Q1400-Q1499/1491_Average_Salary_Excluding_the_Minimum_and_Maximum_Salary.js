/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    return (salary.reduce((a, b) => a + b) - Math.max(...salary) - Math.min(...salary)) / (salary.length - 2)
};

console.log(average([4000, 3000, 1000, 2000]))