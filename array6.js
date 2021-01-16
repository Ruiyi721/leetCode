// Remove Element
// problem : 拿掉陣列裡指定的VAL值
// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3]

// 自己解
let nums = [0,1,2,2,3,0,4,2]
let val = 2
for (let i = 0 ; i < nums.length ; i++) {
    if(nums[i] == val) {
        nums.splice(i , 1)
        i -- 
    }
}
console.log(nums)