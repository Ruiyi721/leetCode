// 自己解
let nums = [0,1,0,3,12]
let count = 0
for(let i = 0; i < nums.length; i++) {
    if(nums[i] == 0) {
        nums.splice(i,1)
        count++
        i--
    }
}
for(let j = 0 ; j < count ; j++) {
    nums.push(0)
}

console.log(nums)

// 最佳解
length = nums.length;
for(let i = 0; i < length; i++){
    if(nums[i] === 0){
        nums.splice(i, 1);
        nums.push(0);
        i--;
        length--;
    }
}