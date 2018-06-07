var fruit = ["banana", "apple", "orange", "watermelon"];  
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.splice(-1);
console.log("Vegetables: ", vegetables);

fruit.shift(0);
console.log("Fruits: ", fruit);

var orangeIndex = fruit.indexOf("orange");
console.log(orangeIndex);

fruit.push(orangeIndex);
console.log(fruit);

var vegetablesLength = vegetables.length;
console.log(vegetablesLength);

vegetables.push(vegetablesLength);
console.log(vegetables);

var food = fruit.concat(vegetables);
console.log(food);

food.splice(4, 2);
console.log(food);

food.reverse();
console.log(food);
