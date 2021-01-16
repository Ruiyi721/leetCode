// Duplicate Zeros
// problem : 把陣列裡有0的item後面插入0，length維持不變

// 拋在千年之外解法
let a = [1,0,2,3,0,4,5,0]
for(let i = 0 ; i < a.length ; i++) {
    if(a[i] == 0) {
        // 第一個從哪個位置開始貼(本身會被取代) 第二個從哪個位置開始複製 第三個複製到哪個位置
        a.copyWithin(i + 1 , i)
        i = i + 1
    }
}
console.log(a)

// 最佳解
function dora(arr) {
    let i = 0
    let len = arr.length
    while(i < arr.length) {
        if(arr[i] == 0) {
            arr.splice(i,0,0)
            // 插入並跳i
            i++
        }
        // 本身那個0不要算進去所以要再跳下一個
        i++
    }
    while(arr.length > len) {
        arr.pop()
    }
    console.log(arr)
    // return arr
}