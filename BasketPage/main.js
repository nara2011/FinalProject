let addedItemsToBasket = JSON.parse(localStorage.getItem("basket")) || []

addedItemsToBasket.forEach((item, index) => {
    let basketRow = `
        <div class="line d-flex justify-content-between align-items-center">
            <div class="left">
                <img style="width: 100px;" src="${item.imageOfComp}" alt="">
            </div>
            <div class="center">
                <p>${item.nameOfComp}</p>
                <p>${item.nameOfComp}</p>
            </div>
            <div class="center2 d-flex align-items-center">
                <button class="quantityBtn minus" data-index="${index}">-</button>
                <span class="mx-2 quantity" data-index="${index}">0</span>
                <button class="quantityBtn plus" data-index="${index}">+</button>
            </div>
            <div class="right">
                <p>${item.priceOfComp}$</p>
            </div>
        </div>
        <hr>
    `;
    document.querySelector(".content").innerHTML += basketRow;
});

const itemsCount = addedItemsToBasket.length;
document.getElementById("totalItems").innerHTML = `${itemsCount} Items`;

document.querySelectorAll(".plus").forEach((plusBtn) => {
    plusBtn.addEventListener("click", function () {
        let index = this.getAttribute("data-index");
        let quantitySpan = document.querySelector(`.quantity[data-index="${index}"]`);
        let quantity = parseInt(quantitySpan.innerHTML);
        quantity++;
        quantitySpan.innerHTML = quantity;
        updateTotalItems();
    });
});

document.querySelectorAll(".minus").forEach((minusBtn) => {
    minusBtn.addEventListener("click", function () {
        let index = this.getAttribute("data-index");
        let quantitySpan = document.querySelector(`.quantity[data-index="${index}"]`);
        let quantity = parseInt(quantitySpan.innerHTML);
        if (quantity > 0) {
            quantity--;
            quantitySpan.innerHTML = quantity;
            updateTotalItems();
        }
    });
});


function updateTotalItems() {
    const quantities = document.querySelectorAll(".quantity");
    let total = 0;
    quantities.forEach(span => {
        total += parseInt(span.innerHTML);
    });
    document.getElementById("totalItems").innerHTML = `${total} Items`;
}

let goToShoppingPage = document.getElementById("goToShoppingPage")
goToShoppingPage.addEventListener("click", function () {
    window.location.href = "../ShoppingPage/index.html";
});