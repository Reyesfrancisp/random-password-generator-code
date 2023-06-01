// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Write an array for numbers;

var numberArray = [];

for (var numIndex = 0; numIndex < 10; numIndex++)
{
  numberArray.push(numIndex);
}

// Write an array for lowercase values

var lowercaseArray = [];
for (var lowerIndex = 97; lowerIndex <= 123; lowerIndex++) 
{
  lowercaseArray.push(String.fromCharCode(lowerIndex));
}
// Write an array for uppercase letters

var uppercaseArray = [];
for (var upperIndex = 65; upperIndex <= 90; upperIndex++) 
{
  uppercaseArray.push(String.fromCharCode(upperIndex));
}
// Write an array for special characters

var specialCharArray = ['!', '#', '$', '%', '&', '*', '+', '-', '@', '^'];

var passwordArray = "";
var passwordLength = 0;
var lowercaseFlag = false;
var uppercaseFlag = false;
var numberFlag = true;
var specialCharFlag = false;

if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength) )
{
//error

}
else
{
//proceed with code

}



generateRandomArrayElement(arrayContent, length)
{
var random = Math.random();
var randomValue = Math.floor(random * length);
passwordArray += arrayContent[randomValue];
}



// console.log(numberArray);

// console.log(lowercaseArray);

// console.log(uppercaseArray);

// console.log(specialCharArray);



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
