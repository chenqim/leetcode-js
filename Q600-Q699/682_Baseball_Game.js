/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    // 利用栈的思想来做
    const stack = []
    for (let i = 0; i < ops.length; i++) {
        if (ops[i] === 'C') {
            stack.pop()
        } else if (ops[i] === 'D') {
            const temp =  stack.pop()
            stack.push(temp, temp * 2)
        } else if (ops[i] === '+') {
            const temp1 = stack.pop()
            const temp2 = stack.pop()
            stack.push(temp2, temp1, temp1 + temp2)
        } else {
            stack.push(Number(ops[i]))
        }
    }
    return stack.reduce((a, b) => a + b)
};

console.log(calPoints(['5', '-2', '4', 'C', 'D', '9', '+', '+']))