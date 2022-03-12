// Assignment code here

//ask for passowrd length and confirm that its acceptable
var passlen = function() {
  var length = "";
  
  while (length === "" || length === null) {
    length = prompt("how long will your password be?");
  }
  if (length < 8 || length > 128){
    length = prompt("Your password length must be between 8 and 128")
  }

  console.log("the length of your password is. " + length);
  return length;
  
};


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

var passinfo = {
  length: passlen(),
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
