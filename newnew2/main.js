let signUpBtn = document.getElementById("signUpBtn")
 
let users = JSON.parse(localStorage.getItem("users")) || []

signUpBtn.addEventListener("click", function () {
    let namee = document.getElementById("namee")
    let surname = document.getElementById("surname")
    let password = document.getElementById("password")
    let email = document.getElementById("email")
    let Confirmpassword = document.getElementById("Confirmpassword")
    let newUser = {
        namee: namee.value,
        surname: surname.value,
        password: password.value,
        email: email.value,
        Confirmpassword: Confirmpassword.value,
    }
    users.push(newUser)

    localStorage.setItem("users", JSON.stringify(users))
    alert("you  succsesifuly registered ")

})


signUpBtn.addEventListener("click", function () {
    window.location.href = "../newneww/index.html"
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
    if ($("#password").val().length == 0) {
        $("#password").removeClass("is-valid")
        $("#password").addClass("is-invalid")
    } else {
        $("#password").removeClass("is-invalid")
        $("#password").addClass("is-valid")
    }
})

$("#namee").change(function () {
    if ($("#namee").val().length === 0) {
        $("#namee").removeClass("is-valid")
        $("#namee").addClass("is-invalid")
    } else {
        $("#namee").removeClass("is-invalid")
        $("#namee").addClass("is-valid")
    }
})

$("#surname").change(function () {
    if ($("#surname").val().length == 0) {
        $("#surname").removeClass("is-valid")
        $("#surname").addClass("is-invalid")
    } else {
        $("#surname").removeClass("is-invalid")
        $("#surname").addClass("is-valid")
    }
})

$("#Confirmpassword").change(function () {
    if ($("#Confirmpassword").val().length === 0) {
        $("#Confirmpassword").removeClass("is-valid")
        $("Confirmpassword").addClass("is-invalid")
    } else {
        $("#Confirmpassword").removeClass("is-invalid")
        $("#Confirmpassword").addClass("is-valid")
    }
})
