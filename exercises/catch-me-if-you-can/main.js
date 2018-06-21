

function sum(x, y){  
    if (typeof x !== "number" || typeof y !== "number"){
        throw new TypeError ("inputs must be numbers");
    }
    return x + y;
}

try {
    sum('1', '2');
}

catch(err) {
    console.log(err.message);
}

console.log(sum(1, 2));


var user = {username: "sam", password: "123abc"};

function login(x, y){  
    if (x !== user.username || y !== user.password){
        throw Error ("Username or password doesn't match")
    }  else if (x === user.username && y === user.password); {
        console.log("Login successful");
    }
}

try {
    login("sammy", "321abc");
}

catch(err) {
    console.log(err.message);
}

try {
    login("sam", "123abc");
}

catch(err) {
    console.log(err.message);
}