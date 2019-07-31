/**
 * @param {number} N
 * @return {number}
 */
// 递归法
var fib = function(N) {
  if (N === 0) return 0
  if (N === 1 || N === 2) return 1
  return fib(N - 1) + fib(N - 2)
};

// 循环法
var fib = function(N) {
  if (N === 0) return 0
  if (N === 1) return 1
  let arr = [0, 1]
  for (let i = 2; i <= N; i++) {
      arr[i] = arr[i - 1] + arr[i - 2]
  }
  return arr[N]
};

// 循环比递归效率高很多
console.log(fib(10))