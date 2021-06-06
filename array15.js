// 自己解
let heights = [1,1,4,2,1,3]
let newHeights = heights.map((a)=>a)
newHeights.sort((a,b)=>a-b)
let count = 0
for(let i = 0 ; i < heights.length ; i++) {
    if(heights[i] !== newHeights[i]) count++
}

console.log(count)

// 最佳解
var heightChecker = function(heights) {
    let sortedHeights = heights.map((height)=>height).sort((a,b)=>a-b); 
    let diffCount = 0;
    for(let i=0;i<sortedHeights.length;i++){
        if(heights[i]!==sortedHeights[i]){
            diffCount++
        }
    }
    return diffCount;
};