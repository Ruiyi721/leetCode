function add(num) {
  function fun(x = 0) {
    return num + x
  }
  return fun
}

let addFive = add(5) // 5
console.log(addFive(8)); // 13
