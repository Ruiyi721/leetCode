let dataList = { date: '', name: [] };
let nameList = ['1', '2', '3', '4', '5'];
let index = nameList.indexOf('1'); // 0
// 跑4天
for(let i = 0; i <= 3; i++) {
    dataList.date = i;
    // 這個for永遠只會跑 0, 1 這兩個index
    for(let j = index; j <= index+1; j++) {
        dataList.name.push(nameList[j % 4]);
        // index += 1;
    }
    console.log(dataList);
}