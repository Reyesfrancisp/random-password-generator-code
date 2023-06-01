// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Write an array for numbers;

numberArray = [0,1,2,3,4,5,6,7,8,9];

// Write an array for lowercase values

lowercaseArray = [];

// Write an array for uppercase letters

uppercaseArray = [];

// Write an array for special characters

specialCharArray = ["!" , '"' , "#" , "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
