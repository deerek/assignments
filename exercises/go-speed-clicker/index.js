
// add event listener on the window
// create variable that is incremented each time a click is detected

var count = 0;

var myCounter = window.addEventListener("click", function(){
    document.getElementById("click-counter").innerHTML = count++;
});

sessionStorage.setItem("totalCount", "count");
var myValue = sessionStorage.getItem(count);



/*
localStorage.setItem("foo", "bar");
localStorage.setItem("myAge", 30);

var myFavPlace = {
    name: "Capitol Reef Ntl Park",
    location: "Southern Utah"
}

localStorage.setItem("myFavPlace", JSON.stringify(myFavPlace));
localStorage.setItem("primes", JSON.stringify([2,3,5,7,11]));

var foo = localStorage.getItem("foo");
console.log(typeof foo);

var myAge = localStorage.getItem("myAge");
console.log(typeof JSON.parse(myAge));

var boolStored = localStorage.getItem("bool");
console.log(JSON.parse(boolStored));

var myFavPlaceStored = localStorage.getItem("myFavPlace");
console.log(JSON.parse(myFavPlaceStored));
*/


