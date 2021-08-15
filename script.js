/////////////// I forgot to add commit history to GITHUB ///////////////////////////////


// Function Definitions //

function invalidInput01() {
  while(userInput1 != "YES" || userInput1 != "NO") {
    alert("That input is invalid! Please re-enter 'Yes' or 'No'");
    userInput1 = prompt("Do you want to include lowercase letters? [Yes/No]").toUpperCase();
    if (userInput1 === "YES" || userInput1 === "NO") {
      break;
    }
  }
}

function invalidInput02() {
  while(userInput2 != "YES" || userInput2 != "NO") {
    alert("That input is invalid! Please re-enter 'Yes' or 'No'");
    userInput2 = prompt("Do you want to include uppercase letters? [Yes/No]").toUpperCase();
    if (userInput2 === "YES" || userInput2 === "NO") {
      break;
    }
  }
}

function invalidInput03() {
  while(userInput3 != "YES" || userInput3 != "NO") {
    alert("That input is invalid! Please re-enter 'Yes' or 'No'");
    userInput3 = prompt("Do you want to include numbers? [Yes/No]").toUpperCase();
    if (userInput3 === "YES" || userInput3 === "NO") {
      break;
    }
  }
}

function invalidInput04() {
  while(userInput4 != "YES" || userInput4 != "NO") {
    alert("That input is invalid! Please re-enter 'Yes' or 'No'");
    userInput4 = prompt("Do you want to include special characters? [Yes/No]").toUpperCase();
    if (userInput4 === "YES" || userInput4 === "NO") {
      break;
    }
  }
}

function invalidInput05() {
  while(userInput5 != "16" || userInput5 != "24") {
    alert("That input is invalid! Please re-enter '16' or '24'");
    userInput5 = prompt("Please specify a password length: 16 or 24?");
    if (userInput5 === "16") {
      userInput5 = 16;
      break;
    } else if (userInput5 === "24") {;
      userInput5 = 24;
      break;
    }
  }
}

// Function Definitions //

// Variable Definitions //

var userInput1 = "User Value";
var userInput2 = "User Value";
var userInput3 = "User Value";
var userInput4 = "User Value";
var userInput5 = "User Value";


// Variable Definitions //

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array of acceptable characters //

var lowerCase = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "$", "@", "#", "?"];

// Array of acceptable characters //

var Button = document.getElementById("generate").addEventListener("click", promptResponseLogic)

function promptResponseLogic() {

  userInput1 = prompt("Do you want to include lowercase letters in your temporary password? [Yes/No]").toUpperCase();
    if (userInput1 === "YES") {
      userInput1 = "YES";
    } else if (userInput1 === "NO") {
      userInput1 = "NO";
    }
    else {
      invalidInput01();
    }

  userInput2 = prompt("Do you want to include capital letters in your temporary password? [Yes/No]").toUpperCase();
    if(userInput2 === "YES") {
      userInput2 = "YES";
    } else if (userInput2 === "NO") {
      userInput2 = "NO";
    } else {
      invalidInput02();
    }

    userInput3 = prompt("Do you want to include numbers in your temporary password? [Yes/No]").toUpperCase();
      if (userInput3 === "YES") {
        userInput3 = "YES";
      } else if (userInput3 === "NO") {
        userInput3 = "NO";
      } else {
        invalidInput03();
      }
    userInput4 = prompt("Do you want to include special characters in your temporary password? [Yes/No]").toUpperCase();
      if (userInput4 === "YES") {
        userInput4 = "YES";
      } else if (userInput4 === "NO") {
        userInput4 = "NO";
      } else {
        invalidInput04();
      }

    if (userInput1 === "NO" && userInput2 === "NO" && userInput3 === "NO" && userInput4 === "NO") {
      while (userInput1 === "NO" && userInput2 === "NO" && userInput3 === "NO" && userInput4 === "NO") {
        alert("You must select atleast one character type to use for your temporary password!");
        promptResponseLogic();
      }
    }

    userInput5 = prompt("What character length would you like your temporary password? [16/24]")
      if (userInput5 === "16") {
        userInput5 = 16;
      } else if (userInput5 === "24") {
        userInput5 = 24;
      } else {
        invalidInput05();
      }
  
}
// Write password to the #password input

var password = [];

function writePassword() {
  if (userInput5 === 16) {
    password.length = 16;

    // If userInput equals NO, every 2nd element would be then replaced by preceeding character type
  
    if (userInput1 === "YES") {
      for(var i = 0; i < 16;) {
        password[i] = lowerCase[Math.floor(Math.random() * 25)];
        i+=2;
      } // End of For Loop
    } // End of First if statement
    else if (userInput2 === "YES") {
      for(var i = 0; i < 16;) {
        password[i] = upperCase[Math.floor(Math.random() * 25)];
        i+=2;
      }
    }
    else if (userInput3 === "YES") {
      for(var i = 0; i < 16;) {
        password[i] = numbers[Math.floor(Math.random() * 9)];
        i+=2;
      }
    }
    else if (userInput4 === "YES") {
      for(var i = 0; i < 16;) {
        password[i] = specialCharacters[Math.floor(Math.random() * 5)];
        i+=2;
      }
    }
    else {
      for(var i = 1; i < 16;) {
        password[i] = "-";
        i+=2;
      }
    }
    // If userInput1 equals NO, every 2nd element would be then replaced by preceeding character type

    // If userInput2 equals NO, every 2nd element would be then replaced by preceeding character type
    
    if (userInput2 === "YES") {
      for(var i = 1; i < 16;) {
        password[i] = upperCase[Math.floor(Math.random() * 25)];
        i+=6;
      } // End of For Loop
    } // End of First if statement
    else if (userInput3 === "YES") {
      for(var i = 1; i < 16;) {
        password[i] = numbers[Math.floor(Math.random() * 9)];
        i+=6;
      }
    }
    else if (userInput4 === "YES") {
      for(var i = 1; i < 16;) {
        password[i] = specialCharacters[Math.floor(Math.random() * 5)];
        i+=6;
      }
    }
    else {
      for(var i = 1; i < 16;) {
        password[i] = "-";
        i+=6;
      }
    }
    // If userInput2 equals NO, every 2nd element would be then replaced by preceeding character type
  
    // If userInput3 equals NO, every 2nd element would be then replaced by preceeding character type

    if (userInput3 === "YES") {
      for(var i = 2; i < 16;) {
        password[i] = numbers[Math.floor(Math.random() * 9)];
        i+=9;
      }
    }
    else if (userInput4 === "YES") {
      for(var i = 2; i < 16;) {
        password[i] = specialCharacters[Math.floor(Math.random() * 5)];
        i+=9;
      }
    }
    else {
      for(var i = 2; i < 16;) {
        password[i] = "-";
        i+=9;
      }
    }

    // If userInput3 equals NO, every 2nd element would be then replaced by preceeding character type

    // If userInput3 equals NO, every 2nd element would be then replaced by preceeding character type

    if (userInput4 === "YES") {
      for(var i = 3; i < 4;) {
        password[i] = specialCharacters[Math.floor(Math.random() * 5)];
        i+=2;
        password[i] = specialCharacters[Math.floor(Math.random() * 5)];
        i+=4;
        password[i] = specialCharacters[Math.floor(Math.random() * 5)];
        i+=6;
        password[i] = specialCharacters[Math.floor(Math.random() * 5)];
      }
    }
    else {
      for(var i = 3; i < 4;) {
        password[i] = "-";
        i+=2;
        password[i] = "-";
        i+=4;
        password[i] = "-";
        i+=6;
        password[i] = "-";
      }
    }
  }
        // userInput5 === 24 //
  else {
    if(userInput5 === 24) {
      password.length = 24;

      // If userInput1 equals NO, every 2nd element would be then replaced by preceeding character type


      if(userInput1 === "YES") {
        for(var i = 0; i < password.length;) {
          password[i] = lowerCase[Math.floor(Math.random() * 25)];
          i+=2;
        }
      }
      else if (userInput2 === "YES") {
        for(var i = 0; i < password.length;) {
          password[i] = upperCase[Math.floor(Math.random() * 25)];
          i+=2;
        }
      }
      else if (userInput3 === "YES") {
        for(var i = 0; i < password.length;) {
          password[i] = numbers[Math.floor(Math.random() * 9)];
          i+=2;
        }
      }
      else if (userInput4 === "YES") {
        for(var i = 0; i < password.length;) {
          password[i] = specialCharacters[Math.floor(Math.random() * 5)];
          i+=2;
        }
      }
      else {
        for(var i = 0; i < password.length;) {
          password[i] = "-";
          i+=2;
        }
      }

      // If userInput1 equals NO, every 2nd element would be then replaced by preceeding character type

      // If userInput2 equals NO, every 2nd element would be then replaced by preceeding character type

      if (userInput2 === "YES") {
        for(var i = 1; i < password.length;) {
          password[i] = upperCase[Math.floor(Math.random() * 25)];
          i+=4;
        }
      }
      else if (userInput3 === "YES") {
        for(var i = 1; i < password.length;) {
          password[i] = numbers[Math.floor(Math.random() * 9)];
          i+=4;
        }
      }
      else if (userInput4 === "YES") {
        for(var i = 1; i < password.length;) {
          password[i] = specialCharacters[Math.floor(Math.random() * 5)];
          i+=4;
        }
      }
      else {
        for(var i = 1; i < 16;) {
          password[i] = "-";
          i+=4;
        }
      }

      // If userInput2 equals NO, every 2nd element would be then replaced by preceeding character type

      // If userInput3 equals NO, every 2nd element would be then replaced by preceeding character type

      if (userInput3 === "YES") {
        for(var i = 3; i < password.length;) {
          password[i] = numbers[Math.floor(Math.random() * 9)];
          i+=8;
        }
      }
      else if (userInput4 === "YES") {
        for(var i = 3; i < password.length;) {
          password[i] = specialCharacters[Math.floor(Math.random() * 5)];
          i+=8;
        }
      }
      else {
        for(var i = 3; i < password.length;) {
          password[i] = "-";
          i+=8;
        }
      }

      // If userInput3 equals NO, every 2nd element would be then replaced by preceeding character type

      if (userInput4 === "YES") {
        for(var i = 7; i < password.length;) {
          password[i] = specialCharacters[Math.floor(Math.random() * 5)];
          i+=8;
        }
      }
      else {
        for(var i = 7; i < password.length;) {
          password[i] = "-";
          i+=8;
        }
      }

    } // Stay inside of this parenthesis //
  } // Stay inside of this parenthesis //
    
  // If userInput3 equals NO, every 2nd element would be then replaced by preceeding character type

  var passwordText = document.querySelector("#password");

  passwordText.value = password.join("");
}

generateBtn.addEventListener("click", writePassword);





//////////////////////////////////////////////////////////////////////
//////////////////// CODE IS DRY!!////////////////////////////////////
//////////////////// USE OF FUNCTIONS COULD BE HIGHLY EFFICIENT!////////
/////////////////// CODE IS NOT EFFICIENT!! //////////////////////////////
///////////////////////////////////////////////////////////////////////////