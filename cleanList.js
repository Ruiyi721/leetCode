let dateStr = '2021-11-26';
let date = new Date(dateStr);
let list = [];
// 跑四天迴圈
function getDate() {
  for (let i = 0; i <= 3; i++) {
    // console.log(i);
    // console.log(date);
    date = new Date(date.setDate(date.getDate() + 7));
    list.push(date.toLocaleDateString());
  }
  console.log(list);
}
getDate();