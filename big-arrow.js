const add = (num1, num2) => num1 + num2;
const sum = add(13, 10);
// console.log(sum);

const multiply = (num1, num2, num3) => num1 * num2 * num3;
const result = multiply(2, 5, 8);
console.log(result);

const tenTimes = (num) => num * 10;
const output = tenTimes(17);

const fiveTimes = num => num * 5;
const outputF = fiveTimes(10);

const getName = () => 'Brandon Sam';
const name = getName();
// console.log(name);

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    const output = result * 5;
    return output;
}

const total = doMath(20, 4);
console.log(total);


/* document.getElementById('my-btn').addEventListener(event => {

}) */