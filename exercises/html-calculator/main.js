



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

function subtracting() {
    var subtractNumber1 = document.getElementById('subtract1').value;
    var subtractNumber2 = document.getElementById('subtract2').value;
    return subtractNumber1 - subtractNumber2;
}

document.getElementById("subtract-button").addEventListener('click', function(event){  
    event.preventDefault();
    document.getElementById("subtract-result").innerHTML = subtracting();
})

function multiplying() {
    var multiplyNumber1 = document.getElementById('multiply1').value;
    var multiplyNumber2 = document.getElementById('multiply2').value;
    return +multiplyNumber1 * +multiplyNumber2;
}

document.getElementById("multiply-button").addEventListener('click', function(event){  
    event.preventDefault();
    document.getElementById("multiply-result").innerHTML = multiplying();
})