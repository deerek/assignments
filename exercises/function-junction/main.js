function twoNumbers(x, y) {
    console.log(x + y);
}

twoNumbers(2, 4)


function threeNumbers(x, y, z) {
    if (x > y && x > z) {
        console.log(x);
    } else if (x < y && y > z) {
            console.log(y);
        } else {
                console.log(z);
            }
}

threeNumbers(3, 12, 1)


function oneNumber(x) {
    if (x % 2 === 0) {
        console.log("true");
    } else {
        console.log("false")
    }
}

oneNumber(111)


var longString = "hey what is up i am derek and this is going to be more than 20 characters i hope"
function stringFunc(kablam) {
    if (kablam.length <= 20) {
        console.log(kablam + kablam);
    } else {
        console.log(kablam.slice(0, kablam.length/2));
    }
}

stringFunc("hey what is up i am derek and this is going to be more than 20 characters i hope")