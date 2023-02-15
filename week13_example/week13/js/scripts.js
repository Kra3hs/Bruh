function checkNumber(x) {
    let y = x.value;
    if (isNaN(y)) {
        x.style = "border: 2px dashed red; color: red;";
    } else {
        x.style = "border: 2px solid #ccc; color: black;";
    }
}
function checkGender(x) {
    let y = x.value;
    if (y == "" || (y.localeCompare("male") != 0 && y.localeCompare("female") != 0)) {
        x.style = "border: 2px dashed red; color: red;";
    }
    else {
        x.style = "border: 2px solid #ccc; color: black;";
    }
}
function checkPass(x) {
    let y = x.value;
    if (y == "" || y.lenght < 8) {
        x.style = "border: 2px dashed red; color: red;";
    } else {
        x.style = "border: 2px solid #ccc; color: black;";
    }
}
function checkRepass(x) {
    let y = x.value;
    let m = document.getElementById("password").value;
    if (y == "" || y.lenght < 8 || y.localeCompare(m) != 0) {
        x.style = "border: 2px dashed red; color: red;";
    } else {
        x.style = "border: 2px solid #ccc; color: black;";
    }
}
function validate() {
    let f = true;
    let x1 = document.getElementById("fname");
    let x2 = document.getElementById("lname");
    let x3 = document.getElementById("age");
    let x4 = document.getElementById("gender");
    let x5 = document.getElementById("country");
    let x6 = document.getElementById("username");
    let x7 = document.getElementById("password");
    let x8 = document.getElementById("repassword");

    if (x1.value == "") {
        x1.style = "border: 2px dashed red; color: red;";
        f = false;
    } else {
        x1.style = "border: 2px solid #ccc; color: black;";
    }
    if (x2.value == "") {
        x2.style = "border: 2px dashed red; color: red;";
        f = false;
    } else {
        x2.style = "border: 2px solid #ccc; color: black;";
    }
    if (x3.value == "") {
        x3.style = "border: 2px dashed red; color: red;";
        f = false;
    } else {
        x3.style = "border: 2px solid #ccc; color: black;";
    }
    if (x4.value == "") {
        x4.style = "border: 2px dashed red; color: red;";
        f = false;
    } else {
        x4.style = "border: 2px solid #ccc; color: black;";
    }
    if (x5.value == "") {
        x5.style = "border: 2px dashed red; color: red;";
        f = false;
    } else {
        x5.style = "border: 2px solid #ccc; color: black;";
    }
    if (x6.value == "") {
        x6.style = "border: 2px dashed red; color: red;";
        f = false;
    } else {
        x6.style = "border: 2px solid #ccc; color: black;";
    }
    if (x7.value == "") {
        x7.style = "border: 2px dashed red; color: red;";
        f = false;
    } else {
        x7.style = "border: 2px solid #ccc; color: black;";
    }
    if (x8.value == "") {
        x8.style = "border: 2px dashed red; color: red;";
        f = false;
    } else {
        x8.style = "border: 2px solid #ccc; color: black;";
    }


   /* if (f) {
        if (isNaN(x3.value)) {
            x3.style = "border: 2px dashed red; color: red;";
            f = false;
        } else {
            x3.style = "border: 2px solid #ccc; color: black;";
        }
        
        if (x4.value.localeCompare("male") != 0 && x4.value.localeCompare("female") != 0) {
            x4.style = "border: 2px dashed red; color: red;";
            f = false;
        }
        else {
            x4.style = "border: 2px solid #ccc; color: black;";

        }

        if (x7.value.length < 8) {
            x7.style = "border: 2px dashed red; color: red;";
            f = false;
        } else {
            x7.style = "border: 2px solid #ccc; color: black;";
        }

        if (x8.length < 8 || x8.value.localeCompare(x7.value != 0)) {
            x8.style = "border: 2px dashed red; color: red;";
            f = false;
        } else {
            x8.style = "border: 2px solid #ccc; color: black;";
        }
    }*/
    return f;
}