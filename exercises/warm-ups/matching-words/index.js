const matchWords = str => {
    // get rid of special characters and capitals
    const noSpecial = str.replace(/[a-z\s]/gi, "").toLowerCase();
    // split string into array
    const splitted = noSpecial.split(" ");
    const sorter = {};
    const output = [];
    // loop through array
    splitted.forEach(word => {
        if (sorter.hasOwnProperty(word)){
            output.push(word);
        } else {
            sorter[word] = true;
        }
    });
    // check our object to see if it already has a property with that string name
    // if so, add to duplicates array
    // if not, set string as a key on the object
}