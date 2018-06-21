
var axios = require("axios");

// GET POST PUT DELETE
var url = "https://api.vschool.io/ben/todo/";

function getToDos() {
axios.get("https://api.vschool.io/ben/todo/")
    .then(function(response){
        console.log(response.data);
        // do stuff with the request as 
    })
    .catch(function(err){
        // handle the error as needed
    })
}

function addTodo(todoItem) {
    axios.post(url, todoItem)
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function(err){
            console.log(err);// do something with error
        })
}

/*
addTodo({
    title: "teach axios",
    description: "this"
})
*/

function getTodoById(id){
    axios.get(url + id)
        .then(function(response) {
            console.log(response.data);
        })
        .catch(function(err) {
            console.log(err);
        })
}

// getTodoById("5b27e88beec94d291400b516");

function editTodoById(id, editedTodo){
    axios.put(url + id, editedTodo)
        .then(function(response) {
            console.log(response.data);
        })
        .catch(function(err) {
            console.log(err);
        })
}

editTodoById("5b27e88beec94d291400b516",{completed: true});