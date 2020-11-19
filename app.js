'use strict';

let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", function(){
    ul.classList.toggle("hide");
})
