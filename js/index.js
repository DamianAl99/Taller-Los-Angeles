"use strict";
let btnMenu = document.querySelector(".menu-icon-open");
let btnclose = document.querySelector(".menu-icon-close");
let divMenu = document.querySelector("#menu");
let divServicios = document.querySelector(".super-item");
let divProyectos = document.querySelector(".proyectos-items");

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

const ServiciosJson = [
  {
    title: "Alineacion de ruedas",
    descriptions:
      "contamos con el servicio de alineación de ruedas, realizado con un equipo y materiales sin precedentes para proporcionarle a su vehículo las máximas garantías. Trabajamos con la marca Space, que nos proporciona lo último en alineadoras de ruedas, unos dispositivos sin precedentes y que hacen del trabajo un proceso mucho más eficiente y profesional",
  },
  {
    title: "Alineacion de ruedas 2",
    descriptions:
      "contamos con el servicio de alineación de ruedas, realizado con un equipo y materiales sin precedentes para proporcionarle a su vehículo las máximas garantías. Trabajamos con la marca Space, que nos proporciona lo último en alineadoras de ruedas, unos dispositivos sin precedentes y que hacen del trabajo un proceso mucho más eficiente y profesional",
  },
  {
    title: "Alineacion de ruedas 3",
    descriptions:
      "contamos con el servicio de alineación de ruedas, realizado con un equipo y materiales sin precedentes para proporcionarle a su vehículo las máximas garantías. Trabajamos con la marca Space, que nos proporciona lo último en alineadoras de ruedas, unos dispositivos sin precedentes y que hacen del trabajo un proceso mucho más eficiente y profesional",
  },
];

const ProyectosJson = [
    {
        title : "Alineacion de ruedas",
        img : "images/img-a.jpg"
    },
    {
        title : "Alineacion de ruedas",
        img : "images/img-b.jpg"
    },
    {
        title : "Alineacion de ruedas",
        img : "images/img-c.jpg"
    },
]

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
      <div class="title">${proyectos.title}</div>
      <div class="item"><img loading="lazy"src="${proyectos.img}" alt="" srcset=""></div>`;
    });
    divProyectos.innerHTML = content;
  };

pintarServiciosJson();
pintarProyectosJson();
clickMenu();
/* <div class="item-servicios">
<div class="title">Alineacion de ruedas</div>
<div class="description">
    <p>contamos con el servicio de alineación de ruedas, realizado con un equipo y materiales sin precedentes para proporcionarle a su vehículo las máximas garantías. Trabajamos con la marca Space, que nos proporciona lo último en alineadoras de ruedas, unos dispositivos sin precedentes y que hacen del trabajo un proceso mucho más eficiente y profesional</p>
</div>
</div>
<div class="item-servicios">
<div class="title">Alineacion de ruedas</div>
<div class="description">
    <p>contamos con el servicio de alineación de ruedas, realizado con un equipo y materiales sin precedentes para proporcionarle a su vehículo las máximas garantías. Trabajamos con la marca Space, que nos proporciona lo último en alineadoras de ruedas, unos dispositivos sin precedentes y que hacen del trabajo un proceso mucho más eficiente y profesional</p>
</div>
</div>
<div class="item-servicios">
<div class="title">Alineacion de ruedas</div>
<div class="description">
    <p>contamos con el servicio de alineación de ruedas, realizado con un equipo y materiales sin precedentes para proporcionarle a su vehículo las máximas garantías. Trabajamos con la marca Space, que nos proporciona lo último en alineadoras de ruedas, unos dispositivos sin precedentes y que hacen del trabajo un proceso mucho más eficiente y profesional</p>
</div>
</div> */
