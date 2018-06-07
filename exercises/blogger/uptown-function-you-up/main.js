var lyrics = ["This", "hit", "that", "ice", "cold",  
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];
function printLyrics() {
    var song = lyrics.join(" ");
    console.log(song);
}
function printReverse() {
    var reversed = lyrics.reverse();
    console.log(reversed.join(" "));   
}
function printEveryOther() {
    var everyOther = lyrics.filter((element, index) => {
        return index % 2 === 0;
    });
    console.log(everyOther.join(" "));
}

printLyrics(lyrics);

printReverse(lyrics);

printEveryOther(lyrics);