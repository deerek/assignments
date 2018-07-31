const stringifyUrl = (url, query) => {
    const queryParts = [];
    for(key in query) {
        queryParts.push(key + '=' + query[key]);
    }
    const fullQuery = queryParts.join('&');
    const fullUrl = url.concat('?' + fullQuery);
    console.log(fullUrl);
}

const url = "http://localhost:8080/monkeys";
const query = {  
  color: "black",
  species: "howler",
  dumb: "monkey"
};

function combineUrl() {

}

stringifyUrl(url, query);

const objectifyUrl = (url, query) => {
    const queryString = url.substring(url.indexOf('?') + 1);
    const splitQuery = queryString.split('&');
    const splitByEqual = splitQuery.map(str => str.split("="));
    const queryOjbect = splitByEqual.reduce((query, subArr) => {
        query[subArr[0]] = subArr[1];
        return query;
    } , {});
}

module.exports = { stringifyUrl, objectifyUrl };