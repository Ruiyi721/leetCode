// 請output 三個為一組的交錯資料 true, true, true, false, false, false, true, true, true, false, false, false 
// 請印出其索引值:[0,1,3,2,4,5,7,9,10,6,8,11]

// const originalArray = [true, true, false, true, false, false, false, true, false, true, true, false];

// // 將原始陣列分組
// const groupedArray = [];
// const indexArray = [];

// originalArray.forEach((item, index) => {
//   const groupIndex = Math.floor(index / 3); // 0 1 2 3

//   if (!groupedArray[groupIndex]) {
//     groupedArray[groupIndex] = [];
//   }

//   groupedArray[groupIndex].push(item);
//   indexArray.push(groupIndex * 3 + index % 3);
// });

// // 將分組後的陣列展平
// const resultArray = groupedArray.flat();

// console.log("原始資料:", originalArray);
// console.log("分組後的交錯資料:", groupedArray);
// console.log("對應的索引值:", indexArray);

const originalArray = [true, true, false, true, false, false, false, true, false, true, true, false];

const a = originalArray.filter((item) => item == true);
const b = originalArray.filter((item) => item == false);
const res = a.concat(b);

// console.log(res);

const resultArray = [];

for(let i = 0; i < res.length; i+=3) {
  if (i == 0) {
    resultArray.push(res[i], res[i + 1], res[i + 2]);
  } else if (i == 3) {
    resultArray.push(res[i + 4], res[i + 5], res[i + 6]);
  } else if (i == 6) {
    resultArray.push(res[i - 3], res[i - 4], res[i - 5]);
  } else if (i == 9) {
    resultArray.push(res[i], res[i + 1], res[i + 2]);
  }
}


console.log(resultArray);