const express = require("express");
const bodyParser = require("body-parser");
const uuid = require("uuid");
const PORT = 6969;

const MOVIES = [];

const app = express();
app.use(bodyParser.json());

app.route("/movies")
    .get((req, res) => {    // callback function contains a request and response
        res.send(MOVIES);
    })
    .post((req, res) => {
        // save new movie   // req.body represents the body of the request
        let newMovie = req.body;
        // need to give the movie an id
        newMovie._id = uuid();
        // 'save' to our 'database'
        MOVIES.push(req.body)
       // send movie back
        res.send(newMovie);
    });

app.route("/movies/:id/")
    .get((req, res) => {
        const foundMovie = MOVIES.find(movie => movie._id === req.params.id)
        res.send(foundMovie);
    })
    .put((req, res) => {
        const toBeEdited = MOVIES.find(movie => movie._id === req.params.id)
        for(let key in req.body) {
            toBeEdited[key] = req.body[key]
        }
        res.send(movie);
    })
    .delete((req, res) => {
        const deleteMovie = MOVIES.find(movie => movie._id === req.params.id)
        MOVIES.splice(MOVIES.indexOf(deleteMovie))
        res.send(deleteMovie)
    })

app.listen(PORT, () => console.log(MOVIES))


////////// 