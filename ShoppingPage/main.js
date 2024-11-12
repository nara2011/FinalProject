let goHome = document.getElementById("goHome");
let goToCreateComp = document.getElementById("goToCreateComp");
let goToBasket = document.getElementById("GoToBasket");
let computersTable = JSON.parse(localStorage.getItem("tableComputers")) || [];
let addedItemsToBasket = JSON.parse(localStorage.getItem("basket")) || [];

goHome.addEventListener("click", function () {
    window.location.href = "../newnew2/newnew3.html";
});

goToCreateComp.addEventListener("click", function () {
    window.location.href = "../comp/index.html";
});

goToBasket.addEventListener("click", function () {
    window.location.href = "../BasketPage/index.html";
});

let umudsComputers = [
    {
        nameOfComp: "Acer",
        imageOfComp: "https://m.media-amazon.com/images/I/71vvXGmdKWL.jpg",
        priceOfComp: "1999",
    },
    {
        nameOfComp: "Asus",
        imageOfComp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4GxzYrNwvaP5XC3JYFz5S_OtvzVNTCgZlhw&s", 
        priceOfComp: "1500",
    },
    {
        nameOfComp: "HP",
        imageOfComp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgeCzspTK6wk1B5B_CTemoWEbzUw8wfa9rmA&s", 
        priceOfComp: "1500",
    },
    {
        nameOfComp: "mackbook",
        imageOfComp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaRwG2s3tCYLL_FITGd4JaIgaVd4a3aVrxOA&s",
        priceOfComp: "1999",
    },
    {
        nameOfComp: "Dell",
        imageOfComp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX1yF9sG0N-qvEwRFXldI3HoPBNgNWO8qRyA&s",
        priceOfComp: "1500",
    },
    {
        nameOfComp: "Nexus",
        imageOfComp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoCQsIG3gLqiCA5xcbfsvf5-UUEoo45iuF_Q&s",
        priceOfComp: "1999",
    },
    {
        nameOfComp: "Casper",
        imageOfComp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgtjws036z6_ht03EF8pJRK2g8WPHmNd61Sw&s", 
        priceOfComp: "1500",
    },
    {
        nameOfComp: "LG",
        imageOfComp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDV13OECPCtueV3d1eY1qMdskLrXGzDFaEQA&s", 
        priceOfComp: "1500",
    },
    {
        nameOfComp: "Samsung",
        imageOfComp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3RAqCcecN1GRXIpc8p88Ex4sAhpPnqHXndw&s",
        priceOfComp: "1999",
    },
    {
        nameOfComp: "Sony",
        imageOfComp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRldZ0CN3fd-wYtB9hiH0XpxpJ1mc21T9qTFA&s",
        priceOfComp: "1500",
    },

];
let combinedComputers = computersTable.concat(umudsComputers);

function renderCategories() {
    
    document.querySelector(".list-group").innerHTML = '';

    let allOption = `<li class="list-group-item active" aria-current="true">All</li>`;
    document.querySelector(".list-group").innerHTML += allOption;

    combinedComputers.forEach(computer => {
        let newList = `
            <li class="list-group-item">${computer.nameOfComp}</li>
        `;
        document.querySelector(".list-group").innerHTML += newList;
    });

    addCategoryListeners();
}

function addCategoryListeners() {
    let listGroupItem = document.querySelectorAll(".list-group-item");

    listGroupItem.forEach(item => {
        item.addEventListener("click", function () {
            listGroupItem.forEach(li => li.classList.remove("active"));
            item.classList.add("active");
            document.querySelector(".card-parent").innerHTML = "";

            let selectedName = item.textContent;
            let filteredComputers;

            if (selectedName === "All") {
                filteredComputers = combinedComputers; 
            } else {
                filteredComputers = combinedComputers.filter(computer => computer.nameOfComp === selectedName);
            }

            filteredComputers.forEach(computer => {
                let newCard = `
                    <div class="card" style="width: 16.6rem; margin-right: 15px; margin-bottom: 15px;">
                        <img src="${computer.imageOfComp}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${computer.nameOfComp}</h5>
                            <p class="card-text">${computer.priceOfComp} AZN</p>
                            <button type="button" class="btn btn-primary w-100 viewDetails" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                View Details
                            </button>
                            <a href="#" class="btn btn-success w-100 my-2 basketBtns">Add To Basket</a>
                        </div>
                    </div>
                `;
                document.querySelector(".card-parent").innerHTML += newCard;
            });
        });
    });
}

renderCategories();


document.querySelector(".card-parent").addEventListener("click", function (event) {
    if (event.target.classList.contains("basketBtns")) {
      
    }

    if (event.target.classList.contains("viewDetails")) {
      
    }
});


function addNewComputer(newComputer) {
    combinedComputers.push(newComputer);
    localStorage.setItem("tableComputers", JSON.stringify(combinedComputers));
    renderCategories(); 
}
document.querySelector(".card-parent").addEventListener("click", function (event) {
    if (event.target.classList.contains("basketBtns")) {
        let btn = event.target;
        let computerCard = btn.closest(".card");
        let getImage = computerCard.querySelector(".card-img-top").src;
        let getName = computerCard.querySelector(".card-title").textContent;
        let getPrice = computerCard.querySelector(".card-text").textContent;

        alert("You added a computer to the basket");
        let basketObj = {
            imageOfComp: getImage,
            nameOfComp: getName,
            priceOfComp: getPrice,
            countOfComp: 1 
        };

        let addedItemsToBasket = JSON.parse(localStorage.getItem("basket")) || [];
        addedItemsToBasket.push(basketObj);
        localStorage.setItem("basket", JSON.stringify(addedItemsToBasket));
    }

    if (event.target.classList.contains("viewDetails")) {
        let btn = event.target;
        let computerCard = btn.closest(".card");
        let getImage = computerCard.querySelector(".card-img-top").src;
        let getName = computerCard.querySelector(".card-title").textContent;
        let getPrice = computerCard.querySelector(".card-text").textContent;

        document.getElementById("viewImage").src = getImage;
        document.getElementById("viewName").innerHTML = getName;
        document.getElementById("viewPrice").innerHTML = getPrice;
    }
});

let searchInput = document.getElementById("searchInput");
let searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", function () {
    let searchTerm = searchInput.value.toLowerCase();
    let filteredComputers = combinedComputers.filter(computer =>
        computer.nameOfComp.toLowerCase().includes(searchTerm)
    );

    document.querySelector(".card-parent").innerHTML = "";
    filteredComputers.forEach(computer => {
        let newCard =
            `<div class="card" style="width: 16.6rem; margin-right: 15px; margin-bottom: 15px;">
                <img src="${computer.imageOfComp}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${computer.nameOfComp}</h5>
                    <p class="card-text">${computer.priceOfComp} AZN</p>
                    <button type="button" class="btn btn-primary w-100 viewDetails" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        View Details
                    </button>
                    <a href="#" class="btn btn-success w-100 my-2 basketBtns">Add To Basket</a>
                </div>
            </div>`;
        document.querySelector(".card-parent").innerHTML += newCard;
    });

    
    searchInput.value = '';
});




