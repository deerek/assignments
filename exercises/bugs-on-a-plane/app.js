var form = function() {
    document.getElementByID("airline-form");
}
var submit = function() {
    document.getElementByID(submit);
}
var query = document.querySelector;

function formAlert() {
    var firstName = document.getElementById("airline-form").elements["first-name"].value;
    var lastName = document.getElementById("airline-form").elements["last-name"].value;
    var age = document.getElementById("airline-form").elements["age"].value;
    var gender = document.getElementById("airline-form").elements["gender"].value;
    var location = document.getElementById("airline-form").elements["travel-location"].value;
    var diet = [];
    if (document.getElementById("airline-form").elements["vegan"].checked) {
        diet.push(document.getElementById("vegan").value);
    }
    if (document.getElementById("airline-form").elements["gluten"].checked) {
        diet.push(document.getElementById('gluten').value);
    }
    if (document.getElementById("airline-form").elements["paleo"].checked) {
        diet.push(document.getElementById('paleo').value);
    }


    return alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
}


document.getElementById("submit").addEventListener("click", formAlert);