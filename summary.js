let favoritePerson = 'Leonardo DiCaprio'; //Leonardo DiCaprio
favoritePerson = 'Dwayne Johnson'; //Dwayne Johnson
const hubby = 'Will Smith'; //Will Smith

// default parameter
function getName(first, last = 'pitt') {
    return first + ' ' + last;
}

// template string
const myPeople = `My lovely person is are ${hubby} and his fullName is ${getName('Cooper')}. My name is ${favoritePerson}.`

console.log(myPeople);

// arrow function
const getName2 = (first, last) => first + ' ' + last;
const fiveTimes = x => x * 5;
const bigArrowFunc = (x, y, z = 0) => {
    const firstPart = x + y;
    const secondPart = y * z;
    const thirdPart = x / z;
    const result = (firstPart + secondPart) * thirdPart;
    return result;
}

const numbers = [2, 4, 67, 54];
const min = Math.min(...numbers)