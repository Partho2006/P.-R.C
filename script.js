let inputbox = document.getElementById("inputbox");
let inputslider = document.getElementById("inputslider");
let slidervalue = document.getElementById("slidervalue");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let num = document.getElementById("num");
let special = document.getElementById("special");
let gbtn = document.getElementById("gbtn");
let copyicon = document.getElementById("copyicon");

slidervalue.textContent = inputslider.value;
inputslider.addEventListener('input', () => {
    slidervalue.textContent = inputslider.value;
});

gbtn.addEventListener('click', () => {
    inputbox.value = generatePassword();
});

let lc = "abcdefghijklmnopqrstuvwxyz";
let uc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let n = "0123456789";
let s = "~!@#$%^&*";

function generatePassword() {
    let charset = "";
    let password = "";

    if (lowercase.checked){charset += lc;}
    if (uppercase.checked) {charset += uc;}
    if (num.checked){charset += n;} 
    if (special.checked){charset += s;} 

    if (charset === "") return "Please select at least one option";

    for (let i = 0; i < inputslider.value; i++) {
        let randomIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomIndex);
    }

    return password;
}
copyicon.addEventListener('click', () => {
    if (inputbox.value !== "") {
        navigator.clipboard.writeText(inputbox.value);
        copyicon.innerText = "check";
        copyicon.title = "Password Copied";

        setTimeout(() => {
            copyicon.innerText = "content_copy";
            copyicon.title = "";
        }, 2000);
    }
});
