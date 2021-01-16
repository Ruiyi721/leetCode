// Squares of a Sorted Array
// problem : 把陣列裡的item平方後，再按照由小到大排序
var sortedSquares = function(nums) {
    let newNums = []
    for(let i = 0 ; i < nums.length ; i++) {
        newNums.push(Math.pow(nums[i],2))   
    }
    newNums.sort(function (a, b) {
    return a - b
    });
    return newNums
};