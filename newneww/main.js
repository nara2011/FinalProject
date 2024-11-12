

let signInBtn = document.getElementById("signInBtn")
let users = JSON.parse(localStorage.getItem("users")) || []

signInBtn.addEventListener("click", function () {

    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    users.forEach(user => {

        if (user.email == email && user.password == password) {
            localStorage.setItem("username", JSON.stringify(user.namee))
            window.location.href = "../newnew2/newnew3.html"
        }
    });

})





$("#email").change(function () {
    if ($("#email").val().length === 0) {
        $("#email").removeClass("is-valid")
        $("#email").addClass("is-invalid")
    } else {
        $("#email").removeClass("is-invalid")
        $("#email").addClass("is-valid")
    }
})

$("#password").change(function () {
    if ($("#email").val().length == 0) {
        $("#password").removeClass("is-valid")
        $("#password").addClass("is-invalid")
    } else {
        $("#password").removeClass("is-invalid")
        $("#password").addClass("is-valid")
    }
})