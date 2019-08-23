/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k = k
    nums.sort((a, b) => b - a)
    this.nums = nums
};

/** 
* @param {number} val
* @return {number}
*/
KthLargest.prototype.add = function(val) {
    if (!this.nums.length) {
        this.nums.push(val)
    } else {
        if (val >= this.nums[0]) {
            // 大于等于第一个
            this.nums.unshift(val)
        } else if (val <= this.nums[this.nums.length - 1]) {
            // 小于等于最后一个
            this.nums.push(val)
        } else {
            // 中间的情况
            for (let i = 0; i < this.nums.length; i++) {
                if (val >= this.nums[i]) {
                    this.nums.splice(i, 0, val)
                    break
                }
            }
        }
    }
    return this.nums[this.k - 1]
};
/** 
* Your KthLargest object will be instantiated and called as such:
* var obj = new KthLargest(k, nums)
* var param_1 = obj.add(val)
*/

let kthLargest = new KthLargest(3, [4,5,8,2])
console.log(kthLargest.add(3)) // returns 4
console.log(kthLargest.add(5)) // returns 5
console.log(kthLargest.add(10)) // returns 5
console.log(kthLargest.add(9)) // returns 8
console.log(kthLargest.add(4)) // returns 8