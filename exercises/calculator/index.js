var readlineSync = require('readline-sync');
 
function adder(x, y) {
    return x + y;
}

function subtractor(x, y) {
    return x - y;
}

function multiplier(x, y) {
    return x * y;
}

function divider(x, y) {
    return x / y;
}

// ask for first number
// push first number to array
// ask for second number
// push second number to array
// prompt user to select function
// run proper function with first and second numbers as arguments x & y
// return the answer

var firstNumber = readlineSync.questionInt('Enter a number '); 
console.log('You chose ' + firstNumber);

var secondNumber = readlineSync.questionInt('Enter another number '); 
console.log('You chose ' + secondNumber);

var equations = ['add', 'sub', 'mul', 'div'],
index = readlineSync.keyInSelect(equations, 'Which equation do you want to run?');{
    if (index === 0) {
        console.log(firstNumber + secondNumber);
    } else if (index === 1) {
        console.log(firstNumber - secondNumber);
    } else if (index === 2) {
        console.log(firstNumber * secondNumber);
    } else if (index === 3) {
        console.log(firstNumber / secondNumber);
    } 
}
 
