let numsArr = [-4,-1,0,3,10];

function sortedSquares (numsArr) {
    let newArr = numsArr.map((num) => {
        return num * num;
    }).sort((a, b) => { return a - b });
    console.log(newArr);
}

sortedSquares(numsArr);