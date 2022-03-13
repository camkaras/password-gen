// Assignment code here

//saving possible characters as a variable
const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const num = "0123456789";
const syms = "!@#$%^&*_-+=";
//setting generator variables
const passwordTxt = document.getElementById("password");
const length = document.getElementById("len");
const incnum = document.getElementById("num");
const incsyms = document.getElementById("syms");

//testing varables 
//console.log(alpha)
//console.log(num)
//console.log(syms)



// Get references to the #generate element
const generateBtn = document.getElementById("generate")

// Add event listener to generate button
generateBtn.addEventListener("click", () => {
  
  let characters = alpha;
  
  incnum.checked ? (characters += num) : "";
  
  incsyms.checked ? (characters += syms) : "";
  
  passwordTxt.value = generatePassword(len.value, characters);
});

//generate password based on usewr input  
const generatePassword = (length, characters) => {
  let password = "";
  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
    if (length < 8 || length > 128){
      length = alert("Your password length must be between 8 and 128, please try again.")
    }
   
  }
  
  //return pw
  return password;
};

