let nums = [3,1,2,4]
length = nums.length
for(let i = 0 ; i < length ; i++) {
    if(nums[i] % 2 !== 0) {
        nums.push(nums[i])
        nums.splice(i,1)
        i--
        length--
    }
}
console.log(nums)