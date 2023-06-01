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


function generatePassword()
{

var passwordArray = "";
var passwordLength = 0;
var lowercaseFlag = false;
var uppercaseFlag = false;
var numberFlag = true;
var specialCharFlag = false;

//get password length


//get each criteria by setting flags which allow entry
lowercaseFlag = confirm("Do you want lower case letters in your password?");

uppercaseFlag = confirm("Do you want upper case letters in your password?");

numberFlag = confirm("Do you want numbers in your password?");

specialCharFlag = confirm("Do you want special characters in your password?");

//get the password length
passwordLength = prompt("Please enter a number between 8 and 128 inclusive for the length of your password: ");

//password length checker
for (var flag = false; flag == false; )
{
if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength) )
{
//error
passwordLength = prompt("Please re-enter a number between 8 and 128 inclusive for the length of your password: ");
}
else
{
//proceed with code
flag = true;
}
}

//password generator itself

for (var arraySelect = true; arraySelect == true;  )
{
  

}


function generateRandomArrayElement(arrayContent, length)
{
var random = Math.random();
var randomValue = Math.floor(random * length);
passwordArray += arrayContent[randomValue];
}



// console.log(numberArray);

// console.log(lowercaseArray);

// console.log(uppercaseArray);

// console.log(specialCharArray);

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
