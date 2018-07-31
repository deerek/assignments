const assert = require('chai').assert;

const {stringifyUrl, objectifyUrl} = require("../app.js");

const testCasesStringify = [
    {
        url: "http://localhost:8080/monkeys",
        query: {
            color: "black",
            species: "howler"
        },
        url: "http://localhost:8080/monkeys",
        query: {}
    }
]

describe('Test Stringify', () => {
    it('The function will take a query object and an HTTP endpoint, and return a URL with a query string', () => {
        assert.equal(stringifyUrl(testCasesStringify[0].url, testCasesStringify[0].query), "http://localhost:8080/monkeys?color=black&species=howler")
    });
    it('should return a url string with no query added', () => {
        assert.equal(stringifyUrl(testCasesStringify[1].url, testCasesStringify[1].query), "http://localhost:8080/monkeys")
    })
});

const testCasesObject = [
    "http://localhost:8080/monkeys?color=black&species=howler",
    "http://localhost:8080/monkeys"
]

describe('Test objectifyUrl', () => {
    it('should return a query object', () => {
        assert.deepEqual(objectifyUrl(testCasesObject[0]), {
            color: "black",
            species: "howler"
        });
    });
    it('should return empty query object', () => {
        assert.deepEqual(objectifyUrl(testCasesObject[1]), {});
    })
});