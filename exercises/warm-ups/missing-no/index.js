// sort the array into ascending order

// count through the array

// if the next number does not equal the current number plus 1, then return that number 

function findMissingNo(arr) {
    var sorted = arr.sort(function(a, b){
        return a - b;
    })
    for (i = 0; i < arr.length; i++) {
        if (sorted[i] - sorted[i+1] !== -1){
            return sorted[i] + 1;
        }
    }
}

console.log(findMissingNo([1,2,3,4,5,7,8,9]));