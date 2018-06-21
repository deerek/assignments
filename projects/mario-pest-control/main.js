

// var cheepsCount = document.getElementById("cheep-cheep-input").value;
var cheepsCount = document.getElementById("goomba-input").value;
var cheepsCount = document.getElementById("bob-omb-input").value;

/* document.getElementById("coin-total").addEventListener('click', function() {
    event.preventDefault()
    console.log((document.getElementById("cheep-cheep-input").value) * 11);
})


function addCheeps() {
    console.log(document.getElementById("cheep-cheep-input").value * 11);
}

function addGoomba() {
    console.log(document.getElementById("goomba-input").value * 5);
}

function addBobomb() {
    console.log(document.getElementById("bob-omb-input").value * 9);
}

function addTotal() {

}

document.getElementById("coin-total").addEventListener('click', function() {
    event.preventDefault()
    addCheeps();
    addGoomba();
    addBobomb();
    console.log(addBobomb.value + addGoomba.value + addCheeps.value);
})
*/

function totalPests() {
    var cheepCount = document.getElementById("cheep-cheep-input").value;
    var cheepTotal = cheepCount * 11;

    var goombaCount = document.getElementById("goomba-input").value;
    var goombaTotal = goombaCount * 5;

    var bobombCount = document.getElementById("bob-omb-input").value;
    var bobombTotal = bobombCount * 9;

    var grandTotal = cheepTotal + goombaTotal + bobombTotal;

    document.getElementById("coin-count").innerHTML = grandTotal + " Coins";
}

document.getElementById("coin-total").addEventListener('click', function() {
    event.preventDefault()
    totalPests();
})