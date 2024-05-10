let arr = [ 1,8,6,2,5,4,8,3,7 ];

function getMaxValue(arr) {
  const len = arr.length;
  let maxArea = 0;
  for(let i = 0; i < len; i++) {
    for(let j = 0; j < len; j++) {
      let area = Math.min(arr[i], arr[j]) * (j - i);
      maxArea = Math.max(area, maxArea);
    }
  }
  console.log(maxArea);
}

getMaxValue(arr);

// var maxArea = function(height) {
//   for(let i = 0; i < height.length; i++) {
//       for(let j = 0; j < height.length; j++) {
//           let area = Math.min(height[i], height[j]) * (j - i);
//           maxArea = Math.max(area, maxArea);
//       }
//   }
// };