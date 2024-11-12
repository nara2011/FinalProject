let computersTable = JSON.parse(localStorage.getItem("tableComputers")) || [];

document.addEventListener("DOMContentLoaded", renderItem);

let homePageBtn = document.getElementById("homePageBtn");
homePageBtn.addEventListener("click", function () {
    window.location.href = "../newnew2/newnew3.html";
});

let addComputer = document.getElementById("addComputer");
addComputer.addEventListener("click", function () {
    let newComputer = {
        nameOfComp: document.getElementById("nameOfComp").value,
        priceOfComp: document.getElementById("priceOfComp").value,
        imageOfComp: document.getElementById("imageOfComp").value,
        DescriptionOfComp: document.getElementById("DescriptionOfComp").value,
        new1: document.getElementById("new1").value,
        emeliYaddas: document.getElementById("emeliYaddas").value,
        merkeziProsessor: document.getElementById("merkeziProsessor").value,
        daimiYaddas: document.getElementById("daimiYaddas").value,
        daimiYaddasTipi: document.getElementById("daimiYaddasTipi").value,
        emeliyyatSistemi: document.getElementById("emeliyyatSistemi").value,
        videoKart: document.getElementById("videoKart").value,
        kategoriya: document.getElementById("kategoriya").value,
    };
    computersTable.push(newComputer);
    localStorage.setItem("tableComputers", JSON.stringify(computersTable));
    renderItem();
    clearForm(); 
});
imageOfComp.addEventListener("change", function () {
    document.getElementById("modalFootherImage").src = imageOfComp.value;
})
let modalButtons = document.querySelectorAll(".modalButtons");
    modalButtons.forEach(btn => {
        btn.addEventListener("click", function () {
            let modalImage = document.querySelector(".modalImage");
            modalImage.src = btn.querySelector("img").src;
        });
    });
  

function renderItem() {
    let myTable = document.getElementById("myTable");
    myTable.innerHTML = ""; 
    computersTable.forEach((computer, index) => {
        let newRow = `
        <tr>
            <td>${index + 1}</td>
            <td class="nameOfRow">${computer.nameOfComp}</td>
            <td><img style="width:80px" src="${computer.imageOfComp}" alt=""></td>
            <td class="priceOfComp">${computer.priceOfComp}</td>
            <td>
                <button type="button" class="btn btn-primary editButtons" data-bs-toggle="modal" data-bs-target="#exampleModal2">Edit</button>
                <button class="deleteRowBtns btn btn-warning">Delete</button>
            </td>
        </tr>`;
        myTable.innerHTML += newRow;
    });

    addEditDeleteListeners();
}
;



function addEditDeleteListeners() {
    document.querySelectorAll(".editButtons").forEach(button => {
        button.addEventListener("click", function () {
            let row = this.closest("tr");
            let index = Array.from(row.parentNode.children).indexOf(row);
            populateEditForm(computersTable[index]);
            saveChanges.setAttribute("data-index", index);
        });
    });

    document.querySelectorAll(".deleteRowBtns").forEach(button => {
        button.addEventListener("click", function () {
            let row = this.closest("tr");
            let index = Array.from(row.parentNode.children).indexOf(row);
            computersTable.splice(index, 1); 
            localStorage.setItem("tableComputers", JSON.stringify(computersTable));
            renderItem(); 
        });
    });
}

function populateEditForm(computer) {
    document.getElementById("nameOfCompEdit").value = computer.nameOfComp;
    document.getElementById("priceOfCompEdit").value = computer.priceOfComp;
    document.getElementById("imageOfCompEdit").value = computer.imageOfComp;
    document.getElementById("DescriptionOfCompEdit").value = computer.DescriptionOfComp;
    document.getElementById("new1Edit").value = computer.new1;
    document.getElementById("emeliYaddasEdit").value = computer.emeliYaddas;
    document.getElementById("merkeziProsessorEdit").value = computer.merkeziProsessor;
    document.getElementById("daimiYaddasEdit").value = computer.daimiYaddas;
    document.getElementById("daimiYaddasTipiEdit").value = computer.daimiYaddasTipi;
    document.getElementById("emeliyyatSistemiEdit").value = computer.emeliyyatSistemi;
    document.getElementById("videoKartEdit").value = computer.videoKart;
    document.getElementById("kategoriyaEdit").value = computer.kategoriya;
}

let saveChanges = document.getElementById("saveChanges");
saveChanges.addEventListener("click", function () {
    let index = this.getAttribute("data-index");
    computersTable[index] = {
        nameOfComp: document.getElementById("nameOfCompEdit").value,
        priceOfComp: document.getElementById("priceOfCompEdit").value,
        imageOfComp: document.getElementById("imageOfCompEdit").value,
        DescriptionOfComp: document.getElementById("DescriptionOfCompEdit").value,
        new1: document.getElementById("new1Edit").value,
        emeliYaddas: document.getElementById("emeliYaddasEdit").value,
        merkeziProsessor: document.getElementById("merkeziProsessorEdit").value,
        daimiYaddas: document.getElementById("daimiYaddasEdit").value,
        daimiYaddasTipi: document.getElementById("daimiYaddasTipiEdit").value,
        emeliyyatSistemi: document.getElementById("emeliyyatSistemiEdit").value,
        videoKart: document.getElementById("videoKartEdit").value,
        kategoriya: document.getElementById("kategoriyaEdit").value,
    };
    localStorage.setItem("tableComputers", JSON.stringify(computersTable));
    renderItem();
});

function clearForm() {
    document.getElementById("nameOfComp").value = "";
    document.getElementById("priceOfComp").value = "";
    document.getElementById("imageOfComp").value = "";
    document.getElementById("DescriptionOfComp").value = "";
    document.getElementById("new1").value = "";
    document.getElementById("emeliYaddas").value = "";
    document.getElementById("merkeziProsessor").value = "";
    document.getElementById("daimiYaddas").value = "";
    document.getElementById("daimiYaddasTipi").value = "";
    document.getElementById("emeliyyatSistemi").value = "";
    document.getElementById("videoKart").value = "";
    document.getElementById("kategoriya").value = "";
}

let deleteRowBtns = document.querySelectorAll(".deleteRowBtns")

deleteRowBtns.forEach(deleteBtn => {
    deleteBtn.addEventListener("click", function () {
        let nameOfComp = this.parentElement.parentElement.querySelector(".nameOfRow").textContent;
        let tableComputers = JSON.parse(localStorage.getItem("tableComputers")) || [];
        let updatedArray = tableComputers.filter(item => item.nameOfComp !== nameOfComp);
        localStorage.setItem("tableComputers", JSON.stringify(updatedArray));
        this.parentElement.parentElement.remove();
    })
})
let searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function () {
    let filter = searchInput.value.toLowerCase();
    let myTable = document.getElementById("myTable");
    let rows = myTable.getElementsByTagName("tr");

    for (let i = 0; i < rows.length; i++) {
        let nameCell = rows[i].getElementsByClassName("nameOfRow")[0];
        if (nameCell) {
            let txtValue = nameCell.textContent || nameCell.innerText;
            rows[i].style.display = txtValue.toLowerCase().includes(filter) ? "" : "none";
        }
    }
}); 
