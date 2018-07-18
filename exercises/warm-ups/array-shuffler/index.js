
// const shuffled = [];

// function shuffler(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         // remove a random index from the array
//         arr.findIndex(Math.floor(Math.random * arr.length) + 1[i]);
//         // push that index to a new array [shuffled]
//         shuffled.push([i]);
//     }
// }

const unsort = arr => {
    const output = [];
    while(arr.length) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        output.push(arr.splice(randomIndex, 1) [0]);
    }
    return output
}

const input = [1,2,3,4,5,6,7,8,9];
console.log(unsort(input));
console.log(input);