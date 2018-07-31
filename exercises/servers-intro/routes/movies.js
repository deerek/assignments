const express = require('express');
const movieRoutes = express.Router();
const uuid = require("uuid");

const MOVIES = require("../movies.json");



movieRoutes.get("/", (req, res) => {
    res.send(MOVIES.filter(movie => {
        for (key in req.query) {
            if (String(movie[key]) !== req.query[key]) {
                return false
            }
        }
        return true;
        }))
    })
    .post("/", (req, res) => {
        // save new movie   // req.body represents the body of the request
        let newMovie = req.body;
        // need to give the movie an id
        newMovie._id = uuid();
        // 'save' to our 'database'
        MOVIES.push(req.body)
    // send movie back
        res.send(newMovie);
});

movieRoutes.get("/:id", (req, res) => {
        const foundMovie = MOVIES.find(movie => movie._id === req.params.id)
        res.send(foundMovie);
    })
    .put("/:id", (req, res) => {
        const toBeEdited = MOVIES.find(movie => movie._id === req.params.id)
        for(let key in req.body) {
            toBeEdited[key] = req.body[key]
        }
        res.send(movie);
})

    .delete("/:id", (req, res) => {
        const deleteMovie = MOVIES.find(movie => movie._id === req.params.id)
        MOVIES.splice(MOVIES.indexOf(deleteMovie))
        res.send(deleteMovie)
})

module.exports = movieRoutes;