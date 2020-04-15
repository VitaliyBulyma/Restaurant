function validateForm() {
    var a = document.forms["contactUs"]["fname"].value;
    var b = document.forms["contactUs"]["lname"].value;
    var c = document.forms["contactUs"]["email"].value;
    var d = document.forms["contactUs"]["mobile"].value;
    var e = document.forms["contactUs"]["message"].value;
    if (a == "") {
        document.getElementById("error1").innerHTML = "First name must be filled out";
        return false;
    } else if (b == "") {
        document.getElementById("error2").innerHTML = "Last name must be filled out";
        return false;
    } else if (c == "") {
        document.getElementById("error3").innerHTML = "Email address must be filled out";
        return false;
    } else if (d == "") {
        document.getElementById("error4").innerHTML = "Mobile number must be filled out";
        return false;
    } else if (e == "") {
        document.getElementById("error5").innerHTML = "Message must be filled out";
        return false;
    }
}
