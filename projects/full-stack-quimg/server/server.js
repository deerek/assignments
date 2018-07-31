const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// VARIABLES
const PORT = 8080;
const MONGODB_URI = "mongodb://localhost:27017/quimg"
const app = express();

// MIDDLEWARE
app.use(bodyParser.json());

// ROUTES
app.use("/users", require("./routes/users"));
app.use("/quimges", require("./routes/quimges"));



mongoose.connect(MONGODB_URI, {useNewUrlParser: true })
    .then(() => console.log("connected to MongoDB"))
    .catch(err => console.log(err))

app.listen(PORT, () => console.log(`server running on port ${PORT}`))