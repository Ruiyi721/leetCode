// Remove Duplicates from Sorted Array
// problem : 拿掉陣列裡重複的值
// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4]

// 自己解
let nums = [0,0,1,1,1,2,2,2,2,3,3,4]
for(let i = 0 ; i < nums.length ; i++) {
    if(nums[i] == nums[i + 1]) {
        nums.splice(i , 1)
        i--
    }
}
console.log(nums)

// 最佳解
nums.splice(0, nums.length, ...nums.filter((num, i, arr) => (
    num !== arr[i-1]
)));

console.log(nums,nums.length);