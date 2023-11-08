// Assignment Code
var generateBtn = document.querySelector("#generate");

//wrote function to test button functionality
function generatePassword() {
//Housekeeping
  var password = ""
  var possible = ""
  var lowercase = "abcdefghijklmnopqrstuvwxyz"
  var uppdercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var numbers = "1234567890"
  var special = "!@#$%^&*()?.,"
  var pwlength = 12
  var hasLowerCase = true
  var hasUpperCase = false
  var hasNumbers = false
  var hasSpecial = false

  if (!hasLowerCase && !hasUpperCase) {
    alert("Please choose at least one character type!");
    return;
  }
//added for loop to generate lowercase password
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
