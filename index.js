var readlineSync = require('readline-sync');
var maxNumber = readlineSync.question('Welcome to FizzBuzz! What number would you like to count to?');

for (let i = 1; i <= maxNumber; i++ ) {
    let fizzBuzzArray = [];
    if (i % 3 === 0) {
        fizzBuzzArray.push('Fizz');
    }
    if (i % 5 === 0) {
        fizzBuzzArray.push('Buzz');
    }
    if (i % 7 === 0) {
        fizzBuzzArray.push('Bang');
    }
    if (i % 11 === 0) {
        fizzBuzzArray = ['Bong'];
    }
    if (i % 13 === 0) {
        if (fizzBuzzArray.length === 0) {
            fizzBuzzArray.push('Fezz');
        } else {
            for (let i = 0; i < fizzBuzzArray.length; i++) {
                if (fizzBuzzArray[i].startsWith('B')) {
                    fizzBuzzArray.splice(i, 0, 'Fezz');
                    break;
                }
            }
        }
    }
    if (i % 17 === 0) {
        fizzBuzzArray.reverse();
    }
    if (fizzBuzzArray.length === 0) {
        fizzBuzzArray.push(i);
    }
    console.log(fizzBuzzArray.join(''));
}

