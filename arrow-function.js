/* function add(num1, num2) {
    const sum = num1 + num2;
    return sum;
} */

//function  declaration
function add(num1, num2) {
    return num1 + num2;
};
//function expression 
const add2 = function add2(num1, num2) {
    return num1 + num2;
};

//function expression anonymous
const add3 = function (num1, num2) {
    return num1 + num2;
}

//arrow function

const add4 = (num1, num2) => num1 + num2;

const sum4 = add4(12, 11);
console.log(sum4);