let nums = [3, 2, 1];
let count = 0;
// b-a大到小，a-b小到大
nums.sort((a, b) => b - a);
let x;
let y;
// 找最大值? 1
let z = Math.max(...nums);
for (let i = 0; i < nums.length - 1; i++) {
  if (nums[i] > nums[i + 1]) {
    count++;
    if (count == 2) {
      // un
      x = nums[i + 1];
      break;
    } else {
      // un
      y = Math.max(...nums);
    }
  }
}
if (x === undefined) {
  console.log(z);
}
// } else if(y === undefined){
//     console.log(z)
// }
else {
  console.log(Math.min(x, y, z));
}

var thirdMax = function (nums) {
    if (nums.length < 3) {
        return Math.max(...nums);
    }
    //Array.from(new Set([...nums]))可刪掉重複數據?
    let dedupe = Array.from(new Set([...nums]));
    console.log(dedupe);
    if (dedupe.length < 3) {
        return Math.max(...dedupe);
    }
    dedupe = Array.from(dedupe).sort((a, b) => b - a);

    return dedupe[2];
};
