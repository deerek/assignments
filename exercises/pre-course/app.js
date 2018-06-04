var booksList = ['Harry Potter' , 'Lord of the Rings' , 'Ready Player One' , 'The Picture of Dorian Gray']

for (var i = 0; i < booksList.length; i++) {
  document.getElementById("myList").innerHTML += "<li>" + booksList[i] + "</li>";
}

document.getElementById("myButton").addEventListener("click", myFunction);

function myFunction() {
    var response = prompt ("What Month Is It?");
    if (response === 'march' || response === 'april' || response === 'may') {
        alert ('Happy Spring!')
    } else if (response === 'june' || response === 'july' || response === 'august') {
        alert ('Happy Summer!')
    } else if (response === 'september' || response === 'october' || response === 'november') {
        alert ('Happy Fall!')
    } else if (response === 'december' || response === 'january' || response === 'february') {
        alert ('Happy Winter!')
    } else {
        alert ('Do you even Earth, Bro?')
    }
}
