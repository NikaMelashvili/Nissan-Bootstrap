'use strict';

const darkBtn = document.querySelector(".dark-btn");
const cardDark = document.querySelectorAll(".card");
const cards = document.querySelectorAll(".list-group-item");
const darkButton = document.querySelector(".dark-btnn");
const outBtn = document.querySelector(".dark-outline-btnn");
const successBtn = document.querySelector(".success-outline-btnn");

let darkCounter = 0;

function cardsDarken(){
    cardDark.forEach(element => {
        element.classList.toggle("card-dark");
    });
}

function cardsDarkenMore(){
    cards.forEach(e => {
        e.classList.toggle("card-dark");
    });
}

function darkButtons(){
    if(darkCounter % 2 != 0){
        darkButton.classList.remove("btn-dark");
        outBtn.classList.remove("btn-outline-dark");
        successBtn.classList.remove("btn-outline-success");
        darkButton.classList.add("btn-light");
        outBtn.classList.add("btn-outline-light");
        successBtn.classList.add("btn-outline-light");
    } else{
        darkButton.classList.remove("btn-light");
        outBtn.classList.remove("btn-outline-light");
        successBtn.classList.remove("btn-outline-light");
        darkButton.classList.add("btn-dark");
        outBtn.classList.add("btn-outline-dark");
        successBtn.classList.add("btn-outline-success");
    }
}

darkBtn.addEventListener("click" , function() {
    darkCounter++;
    document.body.classList.toggle("dark");
    cardsDarken();
    cardsDarkenMore();
    darkButtons();
});