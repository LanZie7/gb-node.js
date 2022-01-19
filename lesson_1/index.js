// Lesson 1 - Введение в Node.js

/*
console.log(process.argv)
const args = process.argv.slice(2)
const [ name ] = process.argv.slice(2)
console.log(args)
console.log(`Hello ${name}!`)
*/

/*
const colors = require('colors');
console.log(colors.red('Hello Node.js!'));
*/


// Lesson 1 - hw

require('colors');

const Colors = {
    GREEN : 0,
    YELLOW : 1,
    RED : 2
}

let currentColor = Colors.GREEN;
const leftColor = process.argv[2];
const rightColor = process.argv[3];
let noPrimeNumbers = true;

// if(isNaN(leftColor) || isNaN(rightColor)) {
//     console.log('Incorrect start parameters'.red);
//     return;
// }

const isPrimeNum = (num) => {
    if(num <= 1) return false;
    for(let i = 2; i < num; i++)
        if(num % i === 0) return false;
    return true;
}

const changeColor = () => {
    currentColor++;
    if(currentColor > Colors.RED)
        currentColor = Colors.GREEN;
}

const colorPrint = (num) => {
    if(noPrimeNumbers) noPrimeNumbers = false;
    switch (currentColor){
        case Colors.RED:
            console.log(`${num}`.red);
            break;
        case Colors.GREEN:
            console.log(`${num}`.green);
            break;
        case Colors.YELLOW:
            console.log(`${num}`.yellow);
            break;
    }
    changeColor();
}

for (let i = leftColor; i <= rightColor; i++){
    if (isPrimeNum(i)) colorPrint(i);
}
if(noPrimeNumbers)
    console.log(`There are no primes in this range[${leftColor},${rightColor}]`.red);


