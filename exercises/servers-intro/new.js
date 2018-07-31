const express = require("express");
const bodyParser = require("body-parser");
const uuid = require("uuid");
const logger = require('./logger');
const PORT = 8000;

const MOVIES = [];

const app = express();
app.use(bodyParser.json());
app.use(logger);

app.route("./movie")
    .get((req, res) => {
        res.send(MOVIES)
    })
    .post((req, res) => {
        const newMovie = req.body;
        newMovie._id = uuid();
        MOVIES.push(req.body);
        res.send(newMovie);
    })

app.route("./movie/:id")
    .get((req, res) => {
        res.send(MOVIES.filter(movie => {
            for (key in req.query) {
                if (String(movie[key]) !== req.query[key]) {
                    return false
                }
            }
            return true;
        }))
    })

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));