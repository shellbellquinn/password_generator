//password variables 
var noSpecial = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890"
var special = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";
var password = "";
var checkbox = document.getElementById("specialChar")
var mode = "true"

//set slider value
document.getElementById("slider").oninput = function () {
    document.getElementById("length").textContent = "Password Length: " + slider.value;
}

//add event listener for specialChar
checkbox.addEventListener("click", function () {
    if (mode === "true") {
        mode = "false";
        checkbox.setAttribute("value", "false");
    } else {
        mode = "true";
        checkbox.setAttribute("value", "true");
    }
    console.log(mode)
});

//generate random password
function generate() {
    if (mode === "true") {
        password = "";
        var passLength = (document.getElementById("slider").value);
        for (var i = 0; i < passLength; i++) {
            password = password + special.charAt(Math.floor(Math.random() * (special.length)));
        }
        //add password to textbox/display area
        document.getElementById("displayPassword").value = password;

    } else if (mode === "false") {
        password = "";
        var passLength = (document.getElementById("slider").value);
        for (var i = 0; i < passLength; i++) {
            password = password + noSpecial.charAt(Math.floor(Math.random() * (noSpecial.length)));
        }

    }
    //add password to textbox/display area
    document.getElementById("displayPassword").value = password;
    console.log(password);
    console.log(slider.value);
    console.log(mode);
}

//copy password
function copyPassword() {
    var copyText = document.getElementById("displayPassword");
    copyText.select();
    document.execCommand("copy");
    alert("Copied to Clipboard");
}