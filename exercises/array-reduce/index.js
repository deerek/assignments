/* EXERCISE #1
function total(arr) {
    return arr.reduce(function (accumulator, element){
        return accumulator + element;
    })
}

console.log(total([1,2,3])); // 6
*/

var stringConcat = arr.reduce(function (accumulator, element){
    })


console.log(stringConcat([1, 2, 3]));

/* EXCERCISE #3
function totalVotes(arr) {
    return arr.reduce(function(accumulator, voter) {
        if(voter.voted) return accumulator + 1;
        return accumulator;
    }, 0);
}


var voters = [  
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

console.log(totalVotes(voters)); // 7
*/

// EXERCISE #6

function voterResults(arr) {
    return arr.reduce(function(accumulator, voter) {
        //check age of voter
        // add one to the age group it belongs to on accumulator
        // return the newly updated accumulator
    }, {
        "18-25": 0,
        "26-35": 0,
        "36-55": 0
    })
}