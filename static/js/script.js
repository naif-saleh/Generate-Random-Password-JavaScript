
// Define Varibles
var display_password = document.getElementById('password');
var password_size = document.getElementById('size');
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWHYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwhyz';
const numbers = '0123456789';
const sympols = '!~@#$%^&*()_+=/?.>,<*-[]{}';
// Lenght of password
const lenght = password_size.value ;
// Collect all varibles
const allVariables = upperCase + lowerCase + numbers + sympols;


// Generate Password
function generatePassword()
{
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += sympols[Math.floor(Math.random() * sympols.length)]
   
    while(lenght > password.length){
        password += allVariables[Math.floor(Math.random() * allVariables.length)]
    }

    alert('You have to refresh the page after select the size')
    return display_password.value = password
}

// Copy Password
function copyPassword()
{
    display_password.select()
    document.execCommand('copy')
}