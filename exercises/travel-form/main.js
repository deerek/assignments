
var form = document.getElementById("travelForm");

form.addEventListener("submit", function (formSubmit) {
    formSubmit.preventDefault();
    var output = {};
    output.firstName = this.firstName.value;
    output.lastName = this.lastName.value;
    output.age = this.age.value;
    output.gender = this.gender.checked;
    output.destination = this.destination.value;
    output.hasDietaryRestrictions = [];
    // loop through array of dietaryRestriction inputs nodes
    // add the ones that are checked to the outputarray
    console.log(output);
})

function dietaryRestriction() {
    for (i = 0; i < 3; i++) {
        
    }
}