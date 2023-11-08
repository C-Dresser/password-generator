// Assignment Code
var generateBtn = document.querySelector("#generate");

//wrote function to test button functionality
function generatePassword() {
//Housekeeping
  var password = ""
  var possible = ""
  var lowercase = "abcdefghijklmnopqrstuvwxyz"
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var numbers = "1234567890"
  var special = "!@#$%^&*()?.,"
  var pwlength = 12
  var hasLowerCase = true
  var hasUpperCase = true
  var hasNumbers = true
  var hasSpecial = true
//added alert if no inputs are chosen
  if (!hasLowerCase && !hasUpperCase) {
    alert("Please choose at least one character type!");
    return;
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
