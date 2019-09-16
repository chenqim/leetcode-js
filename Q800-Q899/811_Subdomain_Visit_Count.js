/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    const map = new Map()
    for (let i = 0; i < cpdomains.length; i++) {
        let arr = cpdomains[i].split(' ')
        let number = Number(arr[0])
        let arr2 = arr[1].split('.')
        // 分两种情况（两级域名和三级域名）
        if (arr2.length === 2) {
            // 两级域名分两种情况
            if (map.has(arr2[1])) {
                let n = map.get(arr2[1])
                map.set(arr2[1], n + number)
            } else {
                map.set(arr2[1], number)
            }
            let s = arr2[0] + '.' + arr2[1]
            if (map.has(s)) {
                let n = map.get(s)
                map.set(s, n + number)
            } else {
                map.set(s, number)
            }
        } else {
            // 三级域名分三种情况
            if (map.has(arr2[2])) {
                let n = map.get(arr2[2])
                map.set(arr2[2], n + number)
            } else {
                map.set(arr2[2], number)
            }
            let s = arr2[1] + '.' + arr2[2]
            if (map.has(s)) {
                let n = map.get(s)
                map.set(s, n + number)
            } else {
                map.set(s, number)
            }
            let s2 = arr2[0] + '.' + arr2[1] + '.' + arr2[2]
            if (map.has(s2)) {
                let n = map.get(s2)
                map.set(s2, n + number)
            } else {
                map.set(s2, number)
            }
        }
    }
    let result = []
    for (let [key, value] of map) {
        result.push(value + ' ' + key)
    }
    return result
};

console.log(subdomainVisits(["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]))