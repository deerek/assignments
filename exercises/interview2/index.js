// array of numbers
// return highest number from that array

// create function (array)
function highestNumber(originalArray) {
        return originalArray.reduce(function (currentHighest, previousHighest) {
            return (currentHighest > previousHighest ? currentHighest : previousHighest);
        })
}

console.log(highestNumber([-1,-3,1,2,3,4,5,6,7,8, 10000]));



// map through array

// compare numbers in the new array

// push highest of compared numbers to new array

/// given string, write a function, string as input, returns a boolean true/false whether it has same number of x's as o's

// loop through, push X's into 
