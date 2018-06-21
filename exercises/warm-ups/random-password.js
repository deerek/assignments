
function passwordGenie(pass) {
  var password = "";
  var charPossible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890~!@#$%^&*+_?";

  for (var i = 0; i < pass; i++)
    password += charPossible.charAt(Math.floor(Math.random() * charPossible.length));

  return password;
}

console.log(passwordGenie(12));

