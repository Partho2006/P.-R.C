let nameerr = document.getElementById("nameerr");
let emailerr = document.getElementById("emailerr");
let passworderr = document.getElementById("passworderr");
let btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (getnm() && getemail() && getpassword()) {
        alert("Form submitted successfully");
    }
});

function getnm() {
    let nm = document.getElementById("name").value.trim();

    if (nm.length === 0) {
        nameerr.innerHTML = "Name is required";
        return false;
    } else if (!nm.match(/^[A-Za-z]+\s[A-Za-z]+$/)) {
        nameerr.innerHTML = "Write full name (First and Last)";
        return false;
    }

    nameerr.innerHTML = "";
    return true;
}

function getemail() {
    let email = document.getElementById("email").value.trim();

    if (email.length === 0) {
        emailerr.innerHTML = "Email is required";
        return false;
    } else if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        emailerr.innerHTML = "Write valid email";
        return false;
    }

    emailerr.innerHTML = "";
    return true;
}

function getpassword() {
    let pw = document.getElementById("password").value;

    if (pw.length === 0) {
        passworderr.innerHTML = "Password is required";
        return false;
    } else if (pw.length < 8) {
        passworderr.innerHTML = "At least 8 characters required";
        return false;
    } else if (
        !pw.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/)
    ) {
        passworderr.innerHTML = "Invalid password format(containing alphabets, numbers and special characters.";
        return false;
    }

    passworderr.innerHTML = "";
    return true;
}
