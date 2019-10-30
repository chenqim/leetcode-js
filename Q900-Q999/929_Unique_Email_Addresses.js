/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    const set = new Set()
    for (const e of emails) {
        let s = ''
        const arr = e.split('@')
        // 去掉 '.'
        arr[0] = arr[0].replace(/\./g, '')
        // 判断是否有 '+'
        if (arr[0].indexOf('+') > -1) {
            // 去掉 '+' 后面的 拼上
            s += arr[0].split('+')[0]
        } else {
            // 直接拼上
            s += arr[0]
        }
        s += '@' + arr[1]
        set.add(s)
    }
    return set.size
};

console.log(numUniqueEmails(['testemail@leetcode.com', 'testemail1@leetcode.com', 'testemail+david@lee.tcode.com']))