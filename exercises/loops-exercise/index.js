
/*
// loop that accepts string as input. print out each letter of string individually
var myString = "this is my string i guess it goes here";
function stringPrinter() {
    for (i = 0; i < myString.length; i++) {
       return myString.split("");
    }
}
console.log(stringPrinter());
*/

// function that accepts a string and single character
// loop through string
// print index of first occurence of character
// if not found, tell user

//var myString = "this is the string lets hope it works";
// var myCharacter = "g";
//var myChar = singleCharacter("this is the string lets hope it works", "g");
function singleCharacter(str, character) {
    
    for (i = 0; i < str.length; i++) {
        //return myString.indexOf(myCharacter);
        if (i === character) {
            return i.value;
        }
    }
}
console.log(singleCharacter("this is the string lets hope it works", "g"));