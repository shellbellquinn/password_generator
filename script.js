//password variables 
var values = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";
var password = "";

//set slider value
document.getElementById("slider").oninput = function () {
    document.getElementById("length").textContent = "Password Length: " + slider.value;
}


//generate random password
function generate() {
    password = "";
    var passLength = (document.getElementById("slider").value);
    for (var i = 0; i < passLength; i++) {
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length)));
    }
    //add password to textbox/display area
    document.getElementById("displayPassword").value = password;
    console.log(password);
    console.log(slider.value);
}


function copyPassword() {
    var copyText = document.getElementById("displayPassword");
    copyText.select();
    document.execCommand("copy");
    alert("Copied to Clipboard");
}