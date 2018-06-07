



// get value from first box and store it
// get value from second box and store it
// add values together when button is clicked
// replace the <p> value with the answer




function adding() {
    var addNumber1 = document.getElementById('add1').value;
    var addNumber2 = document.getElementById('add2').value;
    return +addNumber1 + +addNumber2;
}

document.getElementById("add-button").addEventListener('click', function(event){  
    event.preventDefault();
    document.getElementById("add-result").innerHTML = adding();
})