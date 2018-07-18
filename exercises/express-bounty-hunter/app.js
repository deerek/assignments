const express = require('express');
const bodyParser = require('body-parser');
const uuid = require('uuid');
const PORT = 6969;

const BOUNTIES = [];

const app = express();
app.use(bodyParser.json());


// HANDLE THE PROCESS OF GETTING ALL BOUNTIES, AND CREATING A NEW ONE
app.route("/bounties")
    // this is the get function. sending a request, response sends back the whole BOUNTIES array
    .get((req, res) => {     
        res.send(BOUNTIES);
    })
    .post((req, res) => {
        // variable to store new post request, set equal to the body of the request
        let newBounty = req.body;   
        // now we need to assign an id to the new post
        newBounty._id = uuid();
        // now that we have a new a new post with a generated id, we need to save it to the BOUNTIES array
        BOUNTIES.push(req.body)
        // send new bounty to array
        res.send(newBounty);
    })


    /// NEW ROUTE FOR GETTING BOUNTIES BY THEIR UNIQUE ID
    // THIS PROCESS REQUIRES AN ID BEFORE WE CAN EDIT / DELETE
    app.route("/bounties/:id/")
        .get((req, res) => {
            const foundBounty = BOUNTIES.find(bounty => bounty._id === req.params.id)
            res.send(foundBounty);
        })
        .put((req, res) => {
            const bountyToEdit = BOUNTIES.find(bounty => bounty._id === req.params.id)
            for(let key in req.body) {
                bountyToEdit[key] = req.body[key]
            }
            res.send(bountyToEdit);
        })
        .delete((req, res) => {
            const deleteBounty = BOUNTIES.find(bounty => bounty._id === req.params.id)
            BOUNTIES.splice(BOUNTIES.indexOf(deleteBounty))
            res.send(deleteBounty)
        })

app.listen(PORT, () => console.log(BOUNTIES))
