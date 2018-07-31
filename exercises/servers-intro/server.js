/////// ANYTHING GOING FROM SERVER TO CLIENT WILL PASS THROUGH THIS OR SOMETHING


const express = require("express");
const bodyParser = require("body-parser");
const PORT = 6969;

const logger = require("./logger");
//const authenticate = require("./authenticate");
// const MOVIES = require("./movies.json");


const app = express();
app.use(bodyParser.json());
app.use(logger);
//app.use(authenticate);

app.use("/movies", require("./routes/movies"));
//app.use("/actors", require("./routes/actors"));

// Middleware stuff

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))


////////// 