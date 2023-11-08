// Assignment Code
var generateBtn = document.querySelector("#generate");

//Housekeeping

var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppdercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "1234567890"
var special = "!@#$%^&*()?.,"

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
