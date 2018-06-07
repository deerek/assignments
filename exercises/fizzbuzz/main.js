
function fizzybizzy() {
    var fizzbuzz = []
    for (i = 1; i < 101; i++) {
        if (i % 15 === 0) {
            fizzbuzz.push('fizzbuzz');
        } else if (i % 3 === 0) {
            fizzbuzz.push("fizz");
        } else if (i % 5 === 0) {
            fizzbuzz.push('buzz');
        } else {
            fizzbuzz.push(i);
        }
    }
    return fizzbuzz;
}

console.log(fizzybizzy);