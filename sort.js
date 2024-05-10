const arr = [89, 45, 12, 25, 50, 25];

// function sort(arr) {
//   let len = arr.length;
//   for(let j = 0; j < len; j++) { // 5
//     for(let k = 0; k < len - j - 1; k++) {
//       if (arr[k] > arr[k + 1]) {
//         let temp = arr[k];
//         arr[k] = arr[k + 1];
//         arr[k + 1] = temp;
//       }
//     }
//   }
//   // console.log(arr[i]);
//   console.log(arr);
//   // return newArr; // 排序過的 arr
// }

// sort(arr);

function findNum() {
  let newArr = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 !== 0) {
      newArr.push(arr[i]);
    }
  }
  const res = newArr.filter((item, idx) => {
    console.log(idx);
    return newArr.indexOf(item) === idx 
  });
  console.log(res);
}

findNum(arr);