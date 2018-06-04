/*
for (var i = 0; i < 102; i++ ) {
    if (i % 2 === 0) {
        console.log(i + " is even ")
    }
    else {
        console.log(i + " is odd ")
    }
}
*/

/* BRONZE #1
var numbersArray = []

for (var i = 0; i < 10; i++) {
    numbersArray.push(i);
}

console.log(numbersArray);
*/

/* BRONZE #2
for (let i = 0; i < 101; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
    
}
*/

/* BRONZE #3
var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

var fruitAdded = []

for (var i = 0; i < fruit.length; i++) {
    if (i % 2 !== 0) {
        fruitAdded.push(fruit[i]);
    }
    
}
console.log(fruitAdded);
*/

var peopleArray = [  
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]

for (var i = 0; i < peopleArray.length; i++) {
    console.log(peopleArray.name);
}