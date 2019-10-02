//password variables 
var values = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";
var password = "";

//show slider value


document.getElementById("length").innerHTML = "Password Length: " + "" + slider.value;

document.getElementById("slider").oninput = function () {
    document.getElementById("length").innerHTML = "Password Length: " + slider.value;
}


//generate random password
function generate() {
    var passLength = (document.getElementById("slider").value);
    for (var i = 0; i < passLength; i++) {
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length)));
    }
    //add password to textbox/display area
    document.getElementById("displayPassword").value = password;
    console.log(password);
}




function copyPassword() {
    var copyText = document.getElementById("displayPassword");
    copyText.select();
    document.execCommand("copy");
    alert("Copied to Clipboard");
  }