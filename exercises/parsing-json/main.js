var xhr = new XMLHttpRequest(); // xhr is just a variable created to shorthand the XMLHttpRequest... method..?

xhr.onreadystatechange = function parsePokemon() {  // This funtion will parse the pokemon from JSON
    if (xhr.readyState == 4 && xhr.status == 200) { // readyState == 4 means the HTTP request has gone through the 4 steps, status = 200 means request was successful
        var jsonData = xhr.responseText; // the variable jsonData is now storing the response from the HTTP request
        var data = JSON.parse(jsonData); // data variable runs the JSON.parse method on the jsonData variable (the response from HTTP request)
        //var pokeMen = data.objects[0];
        var pokeDex = data.objects[0].pokemon;
        for (i = 0; i < pokeDex.length; i++) {
            var h3 = document.createElement("h3");
            var name = document.createTextNode(pokeDex[i].name);
            h3.appendChild(name);
            document.body.appendChild(h3);
        } 
        
        // now need to access the array of parsed JSON data with a for loop
        // need to loop through and find the NAME part of the POKEMON array
        // create <p> tag on the page for each iteration of the NAME value 
       // return pokeMen[0];
    }
};

xhr.open("GET", "http://api.vschool.io:6543/pokemon.json", true);  
xhr.send();