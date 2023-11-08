// Assignment Code
var generateBtn = document.querySelector("#generate");

//wrote function to test button functionality
function generatePassword() {

  var password = ""
  var lowercase = "abcdefghijklmnopqrstuvwxyz"
  var uppdercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var numbers = "1234567890"
  var special = "!@#$%^&*()?.,"
  var pwlength = 12
  var hasLowerCase = false
  var hasUpperCase = false
  var hasNumbers = false
  var hasSpecial = false

  for (var i = 0; i < pwlength; i++)
    {
      var random = Math.floor(Math.random() * lowercase.length);
      password += lowercase[random];
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
