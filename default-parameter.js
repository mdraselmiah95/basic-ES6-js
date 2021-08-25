//declaring default parameter

function add(num1, num2) {
    if (num2 = num2 || 0) { //option one old version
        num2 = 0;
    }
    const total = num1 + num2;
    return total;
}

function add(num1, num2) {
    if (num2 == undefined) { //option two old version
        num2 = 0;
    }
    const total = num1 + num2;
    return total;
}

function add(num1, num2 = 0) { //latest ES6
    const total = num1 + num2;
    return total;
}

const result = add(12);
console.log(result);



function add(num1, num2 = 0) {
    //option 2
    // num2 = num2 || 0;
    //option 1
    /*  if (num2 == undefined) {
         num2 = 0;
     } */
    const total = num1 + num2;
    return total;
}
// const result = add(11, 50);
// console.log(result);

function fullName(first, last = 'Khan') {
    const name = first + ' ' + last;
    return name;
}

function sum(number1, number2 = 0, number3 = 0) {
    const addTwo = number1 + number2;
    const finalAdd = addTwo * number3;
    return finalAdd;
}

const result2 = sum(12, 0, 23);
// console.log(result2);