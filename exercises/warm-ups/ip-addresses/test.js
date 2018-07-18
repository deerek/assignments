let chai = require('chai');
let assert = chai.assert;
let validateAddress = require('./index.js')

describe("Given a string something about an IP address", ()=> {
    it("should return true when it receives a valid ip address", ()=>{
        assert.equal(validateAddress('3.89.230.0'), true)
    })
})