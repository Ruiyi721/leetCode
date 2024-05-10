// const obj = {
//   a: {
//     b:1
//   },
//   c: [1, 2, 4],
//   d: null,
//   e:[1, 2, {4: 5}],
//   f: { 4: 1 }
// };
// // 遞迴
// function treverse(obj) {
//   // console.log(Object.values(obj));
//   // Object.values(obj).forEach((item) => {
//   //   console.log(item);
//   // })
//   for(const key in obj) {
//     if(typeof obj[key] === "object" && obj[key] !== null) {
//       treverse(obj[key]);
//     } else {
//       console.log(obj[key]);
//     }
//   }
// }

// treverse(obj); // 1 1 2 4 2 4 5

// function test() {
//   a = 1;
// }
// test.a = 2
// console.log(a);

// const dora = (function() {
//   return function test2() {
//     console.log(123);
//   }
// })();

// console.log(dora);

function myMoney(store) {
  var money = store || 100;
  return {
    add(price) {
      money += price;
    },
    current() {
      return money;
    }
  }
}
const doraMoney = myMoney();
doraMoney.add(100);
const test = doraMoney.current();
console.log(test);