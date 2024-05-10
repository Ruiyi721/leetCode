// function star(n, y) {
//   let star = '';
//   for(let i = 0; i < n; i++) {
//     for(let x = 0; x < y; x++) {
//       star = star + '*';
//     }
//     console.log(star);
//   }
// }

// star(3, 7);
// console.log來決定斷點在哪
// let rows = 3;
// let cols = 7;

// for(let i = 0; i < rows; i++) {
//   let star = ''
//   for(let j = 0; j < cols; j++) {
//     star += '*'
//   }
//   console.log(star);
// }
function test() {
  const height = 5;
  for(let i = 1; i <= height; i++) {
    let space = '.'.repeat(height - i);
    let stars = '*'.repeat(2 * i - 1);
    console.log(space + stars);
  }
}
test();

(function () {
  myName = '小明'
})();
console.log(window); // 全域屬性
delete myName; // true
var newName = '小菜'; // var 雖然也是會變全域變數 但是 他是宣告過的所以無法用 delete 刪除, 可以用這件事證明 哪個是全域變數或屬性
delete newName; // false