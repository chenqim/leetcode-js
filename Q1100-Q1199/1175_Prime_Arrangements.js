/**
 * @param {number} n
 * @return {number}
 */
var numPrimeArrangements = function(n) {
    // 计算质数个数
    const isPrime = (m) => {
        for (let i = 2; i * i <= m; i++) {
            if (m % i === 0) {
                return false
            }
        }
        return true
    }
    // 计算阶乘（会比较大所以用 BigInt）
    const factorialize = (num) => {
        let result = BigInt(1)
        for (let i = 1; i <= num; i++) {
            result *= BigInt(i)
        }
        return result
    }
    let primeCount = 0
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            primeCount++
        }
    }
    let notPrimeCount = n - primeCount
    let res = factorialize(primeCount) * factorialize(notPrimeCount)
    // BigInt 要跟 BigInt 进行运算，与 Number 运算会报错
    return res % (BigInt(Math.pow(10, 9) + 7))
};

console.log(numPrimeArrangements(100))