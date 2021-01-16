// Find Numbers with Even Number of Digits
// problem : 算出陣列裡,有偶數位數的item有幾個
// 最佳解
function dora (nums) {
    nums = nums.filter(function(i) {
        if((i+'').length %2 === 0) return true
        return false
    })
    console.log(nums)
    return nums.length;
};
console.log(dora([2]));

// 自己解
function sam(nums) {
    let even = 0;
    for(let i = 0 ; i < nums.length ; i++) {
        if(nums[i].toString.length % 2 === 0) {
            even++
        }
    }
    return even;
}