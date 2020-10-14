let arr = ["apple banana", "orange", "banana", "kiwi strawberry blueberry"];

let str = arr.join();
let newStr = str.replace(/ /g, ',');
let newArr = newStr.split(',');
console.log(newArr);