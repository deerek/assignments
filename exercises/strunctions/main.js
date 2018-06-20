var strunction1 = "HeLlO wOrLd";
var strunction2 = "How's it going today?"

var struncted1 = strunction1.toLowerCase();
console.log(struncted1);

var struncted2 = strunction1.slice(4);
console.log(struncted2);

var struncted3 = strunction1.split('');
console.log(struncted3);

var struncted4 = strunction1.concat('. ' + strunction2);
console.log(struncted4);

var struncted5 = strunction2.indexOf("'");
console.log(struncted5);

var struncted6 = strunction2.replace("today", "this evening");
console.log(struncted6);

var struncted7 = strunction2.match("today");
console.log(struncted7);

var struncted8 = strunction2.lastIndexOf('g');
console.log(struncted8);