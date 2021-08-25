const numbers = [22, 44, 534, 76, 8, 1, 7, 55, 910, 12];
// console.log(numbers);
// console.log(...numbers);

const max = Math.max(22, 9, 99, 125);
// console.log(max);

const maxInArray = Math.max(...numbers);
const minInArray = Math.min(...numbers);
// console.log(minInArray);
// console.log(maxInArray);

const numbers2 = [22, ...numbers, 77];
const numbers3 = [...numbers, 77];
numbers.push(87);
console.log(numbers);
console.log(numbers2);