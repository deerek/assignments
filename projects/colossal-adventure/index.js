var readlineSync = require('readline-sync');

// get and store player's name
var userName = readlineSync.question("What is your name, hero?");
console.log("Hi " + userName + "!");

// W causes player to walk
direction = readlineSync.keyIn('Press w to walk ', {limit: 'w'});

// player variable/object to store player info stuff
var playerOne = {
    name: userName,
    hp: 100,
    inventory: [],
    isDead: false
}

// algorithm that determines if user encounters enemy
// random enemy
// enemy chosen from 3 enemy names
var enemies = [
    {
        name: "Voldemort",
        hp: 100,
        item: "The Elder Wand"
    },
    {
        name: "Wormtail",
        hp: 20,
        item: "Polyjuice Potion"
    },
    {
        name: "Bellatrix Lestrange",
        hp: 50,
        item: "Pure Evil"
    }
]

// user decides to attack or run
direction = readlineSync.keyIn("Press 'r' to run, or 'f' to fight ", {limit: 'rf'});


// if attack, generate a random attack power value


// if run, choose random number between 1-2, so 50% of escaping


// after player chooses to attack or run, enemy attacks back for random damage amount


// if player kills enemy, give the player some HP and a special item

// store special item in inventory
// push(enemies.item).playerOne.inventory

// if enemy kills player, print a cool death message and game ends

// 