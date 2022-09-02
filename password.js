var password = "SUDHALOVESTOCODE2022"
//Basic tests
//if (password.length > 10 && /\d/.test(password) && password.includes(letter[i]) ) {
   // console.log("Your password change was successful")
//}
// Additional checks for if the password is all uppercase and if the password contains a space
if (password.length > 10 && /\d/.test(password) && /[A-Za-z]/ && (password.toUpperCase() === password) && /\s/.test(password))  {
    console.log("Your password change was successful")
 }


else {console.log("Your password change was not successful, try again ")
}