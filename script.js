// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

  // Write an array for numbers;

  var numberArray = [];

  for (var numIndex = 0; numIndex < 10; numIndex++) {
    numberArray.push(numIndex);
  }

  // Write an array for lowercase values

  var lowercaseArray = [];
  for (var lowerIndex = 97; lowerIndex <= 122; lowerIndex++) {
    lowercaseArray.push(String.fromCharCode(lowerIndex));
  }
  // Write an array for uppercase letters

  var uppercaseArray = [];
  for (var upperIndex = 65; upperIndex <= 90; upperIndex++) {
    uppercaseArray.push(String.fromCharCode(upperIndex));
  }
  // Write an array for special characters

  var specialCharArray = ['!', '#', '$', '%', '&', '*', '+', '-', '@', '^'];

  console.log("Number array: " + numberArray);

  console.log("Lower case array: " + lowercaseArray);

  console.log("Upper case array: " + uppercaseArray);

  console.log("Special character array: " + specialCharArray);


  var passwordArray = "";
  var passwordLength = 0;
  var lowercaseFlag = false;
  var uppercaseFlag = false;
  var numberFlag = true;
  var specialCharFlag = false;
  var combinedArray = [];

  //generate random element function
  function generateRandomArrayElement(arrayContent, length) {
    var random = Math.random();
    var randomValue = Math.floor(random * length);
    passwordArray += arrayContent[randomValue];
  }

  //get each criteria by setting flags which allow entry
  lowercaseFlag = confirm("Do you want lower case letters in your password?  Click OK to include them, press cancel to not include them.");

  console.log(lowercaseFlag);

  uppercaseFlag = confirm("Do you want upper case letters in your password? Click OK to include them, press cancel to not include them.");

  console.log(uppercaseFlag);

  numberFlag = confirm("Do you want numbers in your password? Click OK to include them, press cancel to not include them.");

  console.log(numberFlag);

  specialCharFlag = confirm("Do you want special characters in your password? Click OK to include them, press cancel to not include them.");

  console.log(specialCharFlag);

  //password generator array to pull from

  console.log(combinedArray +": showing the empty combined array.");

  if (lowercaseFlag == true) {

    combinedArray = combinedArray.concat(lowercaseArray);
  }
  console.log(combinedArray + " : is the array after checking the lower case flag.");


  if (uppercaseFlag == true) {

    combinedArray = combinedArray.concat(uppercaseArray);
  }
  console.log(combinedArray + " : is the array after checking the upper case flag.");

  if (numberFlag == true) {
    combinedArray = combinedArray.concat(numberArray);
  }
  console.log(combinedArray + " : is the array after checking the number flag.");

  if (specialCharFlag == true) {

    combinedArray = combinedArray.concat(specialCharArray);
  }
  console.log(combinedArray + " : is the array after checking the special character flag.");

  //console log to display the current combined array that is given by the prompt

  console.log(combinedArray);

  //get the password length
  passwordLength = parseInt(prompt("Please enter a number between 8 and 128 inclusive for the length of your password: "));

  console.log(passwordLength);

  //password length checker
  for (var flag = false; flag == false;) {
    if (passwordLength < 8 || passwordLength > 128) {
      //error
      passwordLength = prompt("Please re-enter a number between 8 and 128 inclusive for the length of your password: ");
    }
    else {
      //proceed with code
      flag = true;
    }
  }

  console.log(passwordLength + ": is the length after checking.");

  for (var indexGen = 0; indexGen < passwordLength; indexGen++) {
    generateRandomArrayElement(combinedArray, combinedArray.length);
  }

  return passwordArray;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);