let addToy = false;
const api = new ApiService("http://localhost:3000/api/v1");
const toyCollectionDiv = document.getElementById("toy-collection");

document.addEventListener("DOMContentLoaded", () => {
    ToyCard.getAll();
});

const addBtn = document.querySelector("#new-toy-btn");
const toyFormContainer = document.querySelector(".container");
addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
        toyFormContainer.style.display = "block";
    } else {
        toyFormContainer.style.display = "none";
    }
});
