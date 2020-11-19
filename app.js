'use strict';

let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListenerc("click", function(){
    ul.classList.toggle("hide");
})
