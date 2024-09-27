let arr = [ 420, 1280, 12850, 100000 ]; // default 30s
let sec = 30; // sec += 100s

let basicWidth = 1000;
// 每差10000長度 即...S
// 1000w...100s +100s 10 3次
// 10000w...200s +100s  10 4次
// 100000w...300s +100s  10 5次
// 值大於10的3次就加100秒 大於4次方再加100秒 大於5次方再加100秒

// 找到值為10的幾次方的function
function test(x, y) {
    return Math.round(Math.log(y) / Math.log(x));
}

arr.forEach((e) => {
    if (e >= basicWidth) {
        let time = test(10, e);
        if (time >= 3) sec += 100;
    }
})

console.log(sec);
console.log(456);