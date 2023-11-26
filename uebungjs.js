// let emailField = document.querySelector(".email-field").placeholder = "Email Address";
let emailField = document.querySelector(".email-field");
let button = document.querySelector(".btn");


function init() {
    button.addEventListener("click", () => {
        console.log(emailField.value)
    })
};

init();