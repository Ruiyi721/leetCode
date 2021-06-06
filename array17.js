let nums = [4,3,2,7,8,2,3,1];
let compareNumArr = []
let compareNum = nums.length;
for(let i = 1; i <= compareNum ; i++) {
    compareNumArr.push(i)
}
let setArr = new Set(nums)

let result = compareNumArr.filter((e)=>{
    return !setArr.has(e)
})
console.log(result)

var findDisappearedNumbers = function(nums) {
    let set=new Set(nums);
    let arr=[]
    for(let i=1;i<=nums.length;i++){
        if(!set.has(i)){
            arr.push(i)
        }
    }
    return arr
};