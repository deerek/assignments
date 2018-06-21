
// function that takes string, reverses string, and compares reversed string to forward string
function ogString(str) {
    /* var lowercaseIt = str.toLowerCase();
    var stripIt = lowercaseIt.replace(/[^a-z]/g, "");
    var splitString = stripIt.split("");
    var reverseIt = splitString.reverse();
    var joinIt = reverseIt.join("");
    
    return lowercaseIt === joinIt; */

var rmvChar = str.toLowerCase().replace(/[^a-z]/g, "");
for(var i = 0; i < rmvChar.length / 2; i++) {
    if (rmvChar[i] !== rmvChar[rmvChar.length - 1 - i]) return false;
    }
    return true;
}

console.log(ogString("I madam, I made radio! So I dared! Am I mad?? Am I?!"));


/*
isPalindrome("Star Rats!");  // true  
isPalindrome("palindrome");  // false  
isPalindrome("I madam, I made radio! So I dared! Am I mad?? Am I?!");  // true  
*/
