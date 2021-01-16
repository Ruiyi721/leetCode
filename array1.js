// Max Consecutive Ones
// problem : 2進位制陣列裡，數出最長的1有幾個
function dora(nums) {
    let count = 0;
    let maxCountTillNow = 0;
    nums.map((item) => {
        if(item == 1) {
            count++ 
        }
        else {
            maxCountTillNow = Math.max(count,maxCountTillNow)
            count = 0
        }
    })
    return Math.max(count,maxCountTillNow)
}
console.log(dora([1,1,1,1,0,1,1,1,0]));
