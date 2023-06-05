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
  var specialCharArray = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', ':', ';', '<', '>', '.', '?', '/'];

  // console.log("Number array: " + numberArray);

  // console.log("Lower case array: " + lowercaseArray);

  // console.log("Upper case array: " + uppercaseArray);

  // console.log("Special character array: " + specialCharArray);

  // initialize other variables
  var passwordString = "";
  var passwordLength = 0;
  var lowercaseFlag = false;
  var uppercaseFlag = false;
  var numberFlag = true;
  var specialCharFlag = false;
  var combinedRandomArray = [];

  //generate random element function
  function generateRandomArrayElement(arrayContent, length) {
    var random = Math.random();
    var randomValue = Math.floor(random * length);
    return arrayContent[randomValue];
  }

  //get each criteria by setting flags which allow entry
  do {
    lowercaseFlag = confirm("Do you want lower case letters in your password? Click OK to include them, press cancel to not include them.");

    uppercaseFlag = confirm("Do you want upper case letters in your password? Click OK to include them, press cancel to not include them.");

    numberFlag = confirm("Do you want numbers in your password? Click OK to include them, press cancel to not include them.");

    specialCharFlag = confirm("Do you want special characters in your password? Click OK to include them, press cancel to not include them.");

    console.log("Lowercase: " + lowercaseFlag + " Uppercase: " + uppercaseFlag + " Number: " + numberFlag + " Special: " + specialCharFlag);

  } while (specialCharFlag == false && numberFlag == false && lowercaseFlag == false && uppercaseFlag == false)

  //password generator array to pull from
  //  console.log(combinedRandomArray +": showing the empty combined array.");

  if (lowercaseFlag == true) {

    combinedRandomArray = combinedRandomArray.concat(lowercaseArray);
  }
  //console.log(combinedRandomArray + " : is the array after checking the lower case flag.");

  if (uppercaseFlag == true) {

    combinedRandomArray = combinedRandomArray.concat(uppercaseArray);
  }
  //  console.log(combinedRandomArray + " : is the array after checking the upper case flag.");

  if (numberFlag == true) {
    combinedRandomArray = combinedRandomArray.concat(numberArray);
  }
  //console.log(combinedRandomArray + " : is the array after checking the number flag.");

  if (specialCharFlag == true) {

    combinedRandomArray = combinedRandomArray.concat(specialCharArray);
  }
  //  console.log(combinedRandomArray + " : is the array after checking the special character flag.");

  //console log to display the current combined array that is given by the prompt

  //console.log("After checking the flags: " + combinedRandomArray);

  //console.log(passwordLength);

  //password length checker
  do {
    passwordLength = Number(prompt("Please enter a number between 8 and 128 inclusive for the length of your password: "));
  } while (!(passwordLength >= 8 && passwordLength <= 128))

  console.log(passwordLength + ": is the length after checking.");
  //generate the random array elements for the password

  for (var stringIndex = 0; stringIndex < passwordLength; stringIndex++) {
    passwordString += generateRandomArrayElement(combinedRandomArray, combinedRandomArray.length);
  }

  return passwordString;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);