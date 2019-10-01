//password variables 
var values = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";
var password = "";

//set password length to slider value
document.getElementById("slider").oninput = function () {
    document.getElementById("length").innerHTML = "length: " + document.getElementById("slider").value;
}

//set default length display of 10
document.getElementById("length").innerHTML = "length: 10";

//generate random password
function generate() {
    var passLength = document.getElementById("slider").value;
    for (var i = 0; i < passLength; i++) {
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length)));
    }

    //add password to textbox/display area
    document.getElementById("displayPassword").value = password;

    console.log(password);

}


//function to copy password to clipboard
function copyPassword() {
    document.getElementById("displayPassword").select();
    document.execCommand("Copy to clipboard");
    alert("Password copied to clipboard!");
}