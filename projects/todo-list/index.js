var section = document.querySelector("section");
var form = document.querySelector("form");
//require("axios");

// make GET request using axios
var url = "https://api.vschool.io/derek_bodily/todo/";

var displayTodo = function (todo) {
    // make wrapper
    var wrapper = document.createElement("div");

    // make header
    var h3 = document.createElement("h3");
    h3.innerHTML = todo.title;

    // make description
    var descP = document.createElement("p");
    descP.innerHTML = todo.description;

    // make price
    var priceP = document.createElement("p");
    priceP.innerHTML = todo.price;

    // make checkbox
    // var label = document.createElement("label");
   // label.innerHTML = "Completed";

    // append all things to wrapper
    wrapper.appendChild(h3);
    wrapper.appendChild(descP);
    wrapper.appendChild(priceP);
   // wrapper.appendChild(label);

    // append them all to the section
    section.appendChild(wrapper)
};

axios.get(url)
    .then(function (response) {
        // convert data into HTML elements
        var todos = response.data;
        todos.forEach(displayTodo);
        // append them to the page
    })
    .catch(function(err){
        console.log(err);
    })


// POST STUFF GOES DOWN HERE

var newTodo = {};

document.getElementById("create-todo").addEventListener("click", function(e){
    // store input values in a todo object
    var todoTitle = document.getElementById("todo-title").value;
    var todoPrice = document.getElementById("todo-price").value;
    var todoDescription = document.getElementById("todo-description").value;
    e.preventDefault();
    // POST the todo using axios
    axios.post("https://api.vschool.io/derek_bodily/todo/", {
        title: todoTitle,
        price: todoPrice,
        description: todoDescription

    })
        .then(function (response) {
            // convert data into HTML elements
            console.log(response.data);
            // append them to the page
        })
        .catch(function(err){
            console.log(err);
        })

});

