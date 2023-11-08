// Assignment Code
var generateBtn = document.querySelector("#generate");

//added promt for password length and alert if an invalid length is chosen

//wrote function to test button functionality
//changed var pwlength to reflect user input
function generatePassword() {
  //Housekeeping
  var password = ""
  var possible = ""
  var lowercase = "abcdefghijklmnopqrstuvwxyz"
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var numbers = "1234567890"
  var special = "!@#$%^&*()?.,"
  var pwlength = choosepwlength
  var hasLowerCase = true
  var hasUpperCase = true
  var hasNumbers = true
  var hasSpecial = true

  //moved prompt into generatepassword function to allow the user to re-enter the prompt
  var choosepwlength = prompt("Please select a password length between 8 and 128 characters.", "Enter desired password length here.");

  if (choosepwlength < 8 || choosepwlength > 128) {
  alert("Please choose a number between 8 and 128.")
  return null;
  }

  var hasLowerCase = window.confirm("Do you want to include lowercase letters?");

  var hasUpperCase = window.confirm("Do you want to include uppercase letters?");

  var hasNumbers = window.confirm("Do you want to include numbers?");

  var hasSpecial = window.confirm("Do you want to include special characters?");

  //added alert if no inputs are chosen
  if (!hasLowerCase && !hasUpperCase && !hasLowerCase && !hasSpecial) {
    alert("Please choose at least one character type!");
    return null;
  }
  //added all input types to possible
  if (hasLowerCase) {
    possible += lowercase;
  }

  if (hasUpperCase) {
    possible += uppercase;
  }

  if (hasNumbers) {
    possible += numbers;
  }

  if (hasSpecial) {
    possible += special;
  }

  //added for loop to generate lowercase password
  //chanded for loop to work for all input types
  for (var i = 0; i < pwlength; i++)
    {
      var random = Math.floor(Math.random() * possible.length);
      password += possible[random];
    }
  
  return password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
