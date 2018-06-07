function noDupes(str){
    var output = {
        noDupes: "",
        extras: ""
    }
    for (var i = 0; i < str.length; i++){
        if (output.noDupes.includes(str[i])){
            output.extras += str[i];
        } else {
            output.noDupes += str[i];
        }
    }
    return output;
}

noDupes("bookkeeper larry")


// loop through the string
// determine if the character has already been seen
// if true: add it to extra
// otherwise: add it to noDupes
// return output