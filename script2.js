document.querySelector("#generate").addEventListener("click", writePassword);


var number = ["0","2","3","4","5","6","7","8","9"];
var specialChar = ["!","@","#","$","%","^","&","*","(",")"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
var alphaUpper = [["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],

var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;

function generatePassword() {
    var confirmlength = (prompt("Enter the amount of characters you would like in your password"));

    while(confirmlength <= 8 || confirmlength >= 128) {
        alert("password length has to be between 8 to 128. Please try again")
        var confirmlength = (prompt("Enter the amount of characters you would like in your password"));
    }

    var confirmLowerCase = confirm("click ok to confirm if you would like lower case letters in your password");
    var confirmUpperCase = confirm("click ok to confirm if you would like upper case letters in your password");
    var confirmNumericCharacter = confirm("click ok to confirm if you would like numbers in your password");
    var confirmSpecialCharacter = confirm("click ok to confirm if you would like special characters in your password");

    while(confirmLowerCase === false && confirmUpperCase === false && confirmnumber === false && confirmSpecialCharacter === false) {
        alert("you must choose at least one character type");
        var confirmLowerCase = confirm("click ok to confirm if you would like lower case letters in your password");
        var confirmUpperCase = confirm("click ok to confirm if you would like upper case letters in your password");
        var confirmNumericCharacter = confirm("click ok to confirm if you would like numbers in your password");
        var confirmSpecialCharacter = confirm("click ok to confirm if you would like special characters in your password");
    }

      var passwordCharacters = []

    if (confirmLowerCase) {
        passwordCharacters = passwordCharacters.concat(lowercase)
    }

    if (confirmUpperCase) {
        passwordCharacters = passwordCharacters.concat(uppercase)
    }

    if (confirmNumericCharacter) {
        passwordCharacters = passwordCharacters.concat(number)
    }

    if (confirmSpecialCharacter) {
        passwordCharacters = passwordCharacters.concat(specialChar)
    }

    var randomPassword = ""

    for (var i = 0; i < confirmlength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        

    }
    return randomPassword;


}

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}