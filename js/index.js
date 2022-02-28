"use strict";
let btnMenu = document.querySelector(".menu-icon-open");
let btnclose = document.querySelector(".menu-icon-close");
let divMenu = document.querySelector("#menu");
let divServicios = document.querySelector(".super-item");
let divProyectos = document.querySelector(".proyectos-items");
let divPagesProyectos = document.querySelector(".pagesProyectos-items");

let btnContactos = document.querySelector(".btn-contactos");
let btnVolverContactos = document.querySelector(".volverContactos");
let btnEngranageContactos = document.querySelector(".engranageContactos");

let btnProyectos = document.querySelector(".btn-proyectos");
let btnVolver = document.querySelector(".volverProyectos");
let btnEngranage = document.querySelector(".engranageProyectos");

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

const clickProyectos = () => {
  btnProyectos.addEventListener("click", () => {
    document
      .querySelector("#pagesProyectos")
      .classList.toggle("mostrarProyectos");
    document.querySelector(".main").classList.toggle("ocultarMain");
  });
  btnVolver.addEventListener("click", () => {
    document
      .querySelector("#pagesProyectos")
      .classList.toggle("mostrarProyectos");
    document.querySelector(".main").classList.toggle("ocultarMain");
  });
  btnEngranage.addEventListener("click", () => {
    document
      .querySelector("#pagesProyectos")
      .classList.toggle("mostrarProyectos");
    document.querySelector(".main").classList.toggle("ocultarMain");
  });
};
const clickContactos = () => {
  btnContactos.addEventListener("click", ()=>{
    document.querySelector("#pagesContactos").classList.toggle("mostrarContactos")
    document.querySelector(".main").classList.toggle("ocultarMain")
  })
  btnVolverContactos.addEventListener("click", ()=>{
    document.querySelector("#pagesContactos").classList.toggle("mostrarContactos")
    document.querySelector(".main").classList.toggle("ocultarMain")
  })
  btnEngranageContactos.addEventListener("click", ()=>{
    document.querySelector("#pagesContactos").classList.toggle("mostrarContactos")
    document.querySelector(".main").classList.toggle("ocultarMain")
  })
}

const ServiciosJson = [
  {
    title: "Centro de lubricación",
    descriptions:
      "contamos con el servicio de alineación de ruedas, realizado con un equipo y materiales sin precedentes para proporcionarle a su vehículo las máximas garantías. Trabajamos con la marca Space, que nos proporciona lo último en alineadoras de ruedas, unos dispositivos sin precedentes y que hacen del trabajo un proceso mucho más eficiente y profesional",
  },
  {
    title: "Chequeo computarizado",
    descriptions:
      "contamos con el servicio de alineación de ruedas, realizado con un equipo y materiales sin precedentes para proporcionarle a su vehículo las máximas garantías. Trabajamos con la marca Space, que nos proporciona lo último en alineadoras de ruedas, unos dispositivos sin precedentes y que hacen del trabajo un proceso mucho más eficiente y profesional",
  },
  {
    title: "Mecánica general",
    descriptions:
      "contamos con el servicio de alineación de ruedas, realizado con un equipo y materiales sin precedentes para proporcionarle a su vehículo las máximas garantías. Trabajamos con la marca Space, que nos proporciona lo último en alineadoras de ruedas, unos dispositivos sin precedentes y que hacen del trabajo un proceso mucho más eficiente y profesional",
  },
];

const ProyectosJson = [
  {
    title: "Alineacion de ruedas",
    img: "images/img-a.jpg",
  },
  {
    title: "Alineacion de ruedas",
    img: "images/img-b.jpg",
  },
  {
    title: "Alineacion de ruedas",
    img: "images/img-c.jpg",
  },
];

const PagesProyectosJson = [
  {
    title: "Alineacion de ruedas",
    img: "images/img-a.jpg",
  },
  {
    title: "Alineacion de ruedas",
    img: "images/img-b.jpg",
  },
  {
    title: "Alineacion de ruedas",
    img: "images/img-c.jpg",
  },
  {
    title: "Alineacion de ruedas",
    img: "images/img-a.jpg",
  },
  {
    title: "Alineacion de ruedas",
    img: "images/img-b.jpg",
  },
  {
    title: "Alineacion de ruedas",
    img: "images/img-c.jpg",
  },
  {
    title: "Alineacion de ruedas",
    img: "images/img-a.jpg",
  },
  {
    title: "Alineacion de ruedas",
    img: "images/img-b.jpg",
  },
  {
    title: "Alineacion de ruedas",
    img: "images/img-c.jpg",
  },
];

const pintarServiciosJson = () => {
  let content = "";
  ServiciosJson.forEach((servicio) => {
    content += `
        <div class="item-servicios">
        <div class="title">${servicio.title}</div>
        <div class="description">
            <p>${servicio.descriptions}</p>
        </div>
        </div>`;
  });
  divServicios.innerHTML = content;
};

const pintarProyectosJson = () => {
  let content = "";
  ProyectosJson.forEach((proyectos) => {
    content += `
    <div>
      <div class="title">${proyectos.title}</div>
      <div class="item"><img loading="lazy  "src="${proyectos.img}" alt="" srcset=""></div>
      </div>`;
  });
  divProyectos.innerHTML = content;
};

const pintarPagesProyectosJson = () => {
  let content = "";
  PagesProyectosJson.forEach((proyectos) => {
    content += `
      <div class="title">${proyectos.title}</div>
      <div class="item"><img loading="lazy  "src="${proyectos.img}" alt="" srcset=""></div>`;
  });
  divPagesProyectos.innerHTML = content;
};

pintarServiciosJson();
pintarProyectosJson();
pintarPagesProyectosJson();
clickMenu();
clickProyectos();
clickContactos();
