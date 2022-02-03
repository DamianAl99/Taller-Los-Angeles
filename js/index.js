"use strict";
let btnMenu = document.querySelector(".menu-icon-open");
let btnclose = document.querySelector(".menu-icon-close");
let divMenu = document.querySelector("#menu");

const clickMenu = () => {
  btnMenu.addEventListener("click", () => {
    document.querySelector("header").classList.toggle("header-open");
  });
  btnclose.addEventListener("click", () => {
    document.querySelector("header").classList.toggle("header-open");
  });
  divMenu.addEventListener("click", () => {
    document.querySelector("header").classList.toggle("header-open");
  });
};



clickMenu();
