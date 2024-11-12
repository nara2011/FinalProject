let username = JSON.parse(localStorage.getItem("username")) || ""
let display = document.getElementById("display")
display.innerHTML = "Welcome" + " " + username

let shoppingBtn = document.getElementById("shoppingBtn")
let computersBtn = document.getElementById("computersBtn")
let logoutBtn = document.getElementById("logOutBtn")
let logInBtn = document.querySelector("#logInBtn")

logoutBtn.style.display = "none"
computersBtn.style.display = "none"
let userLoggedIn = JSON.parse(localStorage.getItem("username"))
if (userLoggedIn.length > 0) {
    logInBtn.style.display = "none"
    logoutBtn.style.display = "block"
    computersBtn.style.display = "block"
}

computersBtn.addEventListener("click", function () {
    window.location.href = "../comp/index.html"
})

shoppingBtn.addEventListener("click", function () {
    window.location.href = "../ShoppingPage/h1.html"
})


logInBtn.addEventListener("click", function () {
    window.location.href = "../newneww/index.html"
})


shoppingBtn.addEventListener("click", function () {
    window.location.href = "../ShoppingPage/index.html"
})

document.getElementById("logOutBtn").addEventListener("click", function () {
    localStorage.removeItem("username")
    window.location.href = "./newnew3.html"
})