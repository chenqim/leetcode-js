/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(N, trust) {
    // 相信你的
    let trustYou = []
    // 你相信的
    let youTrust = []
    for (let i = 0; i < N; i++) {
        trustYou.push(0)
        youTrust.push(0)
    }
    for (let i = 0; i < trust.length; i++) {
        trustYou[trust[i][1] - 1]++
        youTrust[trust[i][0] - 1]++
    }
    for (let i = 0; i < N; i++) {
        // 除了你以外的人都相信你，你不相信任何人
        if (trustYou[i] === N - 1 && youTrust[i] === 0) return i + 1
    }
    return -1
};

console.log(findJudge(2, [[1, 2]]))