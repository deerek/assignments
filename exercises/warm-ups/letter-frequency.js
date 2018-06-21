function getFrequency(str) {
    var countChars = {};
    for (var i=0; i<str.length;i++) {
        var character = str.charAt(i);
        if (countChars[character]) {
           countChars[character]++;
        } else {
           countChars[character] = 1;
        }
    }

    return countChars;
};

console.log(getFrequency("slimy smelly solution"));