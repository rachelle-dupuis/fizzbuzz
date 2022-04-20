for (let i = 1; i <= 200; i++ ) {
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
    if (fizzBuzzArray.length === 0) {
        fizzBuzzArray.push(i);
    }
    console.log(fizzBuzzArray.join(''));
}

