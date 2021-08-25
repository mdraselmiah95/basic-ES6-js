// break up with var

let balance = 1240;
balance = 1340;
const userName = 'My Love my Heart';
const weTogether = 'ami ' + userName;
console.log(weTogether);
// userName = 'My Heart';

const numbers = [45, 23, 89, 60];
// numbers = [99, 145, 3]; // not allowed
numbers.push(555);
numbers[1] = 443;

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
    sum = sum + number;
}
/* for (let i = 0; i < numbers.length; i++){
    
} */
const student = {
    roll: 101,
    name: 'Rohim',
    job: 'intern'
};
student.name = 'AL Amin';
// student = { name: 'al amin' };