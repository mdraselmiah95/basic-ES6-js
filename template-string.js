const priya = 'Asif Akbar';
const meya = "Meya tumi ki dukkho chino";
const kobita = `Kobita tumi sopno charini`;
const multiline = 'This is my first line. \n' +
    'This is my second line. \n' +
    'This is my THirt line. \n';

// console.log(multiline);

const multilineNew = `
This is multi line
THis is second line
this is third line
this is fourth line
`
// console.log(multilineNew);
const friends = ['Rasel', 'Rohim', 'Korim', 'Asif', 'Shakib'];
const count = 5;
const old = '<h3 class="friend-name">Friend-5</h3>'
const old2 = '<h3 class="friend-name">Friend-' + count + '</h3>';
const new0 = `<h3 class="friend-name">Friend-${meya}</h3>`
const new1 = `<h3 class="friend-name">Friend-${count}</h3>'`;
const new2 = `<h3 class="friend-name">Friend-${friends.length}</h3>`;
console.log(new1);
console.log(new0);
const first = 'Rohim';
const last = 'Khan';
const fullOld = 'This person name is ' + first + ' ' + last;

const fullNew = `This person name is: ${first} ${last}.Has money ${friends.length * 500} .He lives in Dhaka.`;
console.log(fullNew);