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
  //al hacer click muestra el div proyecto y oculta el main
  btnProyectos.addEventListener("click", () => {
    document.querySelector("#pagesProyectos").classList.toggle("mostrarProyectos");
    document.querySelector(".main").classList.toggle("ocultarMain");
    document.querySelector("footer").classList.toggle("ocultarMain");
  });
  btnVolver.addEventListener("click", () => {
    document
      .querySelector("#pagesProyectos")
      .classList.toggle("mostrarProyectos");
    document.querySelector(".main").classList.toggle("ocultarMain");
    document.querySelector("footer").classList.toggle("ocultarMain");
  });
  btnEngranage.addEventListener("click", () => {
    document
      .querySelector("#pagesProyectos")
      .classList.toggle("mostrarProyectos");
    document.querySelector(".main").classList.toggle("ocultarMain");
    document.querySelector("footer").classList.toggle("ocultarMain");
  });
};
const clickContactos = () => {
  btnContactos.addEventListener("click", ()=>{
    document.querySelector("#pagesContactos").classList.toggle("mostrarContactos")
    document.querySelector(".main").classList.toggle("ocultarMain")
    document.querySelector("footer").classList.toggle("ocultarMain");
  })
  btnVolverContactos.addEventListener("click", ()=>{
    document.querySelector("#pagesContactos").classList.toggle("mostrarContactos")
    document.querySelector(".main").classList.toggle("ocultarMain")
    document.querySelector("footer").classList.toggle("ocultarMain");
  })
  btnEngranageContactos.addEventListener("click", ()=>{
    document.querySelector("#pagesContactos").classList.toggle("mostrarContactos")
    document.querySelector(".main").classList.toggle("ocultarMain")
    document.querySelector("footer").classList.toggle("ocultarMain");
  })
}

const ServiciosJson = [
  {
    title: "Centro de lubricaci??n",
    descriptions:
      "Ofrecemos con los mejores precios, una excelente log??stica y una gran gama de productos unicos como lubricantes para motores livianos y pesados, aceites para sistemas de transmisi??n, fluidos y grasas para diversas aplicaciones. Hacemos: Cambio de aceite motor, Cambio de aceite de caja, Cambio de aceite diferencial ",
      img: "images/centro de lubricacion.jpg",
      mensaje: "https://api.whatsapp.com/send?phone=595991486133&text=Buenas!%20Estoy%20interesado%20en%20lubricantes.."
  },
  {
    title: "Mec??nica ligera",
    descriptions:
      "En Mecanica Los Angeles Racing, ponemos toda nuestra profesionalidad y experiencia para resolver problemas/fallas en su coche. Hacemos: Reparaci??n de tren delantero y trasero, Reparaci??n de motor y caja de cambios (caja mec??nica), Adaptaciones en general, Reparaci??n de frenos",
      img: "images/mecanica-ligera.png",
      mensaje: "https://api.whatsapp.com/send?phone=595991486133&text=Buenas!%20Estoy%20interesado%20en%20un%20presupuesto.."
  },
  {
    title: "Chequeo computarizado",
    descriptions:
      "Un diagn??stico computarizado se realiza, cuando en el panel de instrumentos (tablero) aparece una luz de color ??mbar o amarillo que indique una advertencia en los diferentes sistema computarizado o electr??nico de veh??culo. Con nuestro diagn??stico computarizado efectuamos diagn??stico computarizado de fallas por sistema scanner",
      img: "images/chequeo computarizado.jpg",
      mensaje: "https://api.whatsapp.com/send?phone=595991486133&text=Buenas!%20Estoy%20interesado%20en%20un%20chequeo%20computarizado.."
  },
  {
    title: "Carga de Gas",
    descriptions:
      "El aire acondicionado y el climatizador son un equipamiento de confort imprescindible hoy en d??a en los vehiculos.",
      img: "images/carga de gas.jpg",
      mensaje: "https://api.whatsapp.com/send?phone=595991486133&text=Buenas!%20Estoy%20interesado%20en%20carga%20de%20gas.."
  },
];

const ProyectosJson = [
  {
    title: "Montaje de motor reparado",
    img: "images/img-h.jpeg",
  },
  {
    title: "Chequeo computarizado",
    img: "images/img-i.jpeg",
  },
  {
    title: "Mantenimiento de motor",
    img: "images/img-k.jpeg",
  },
];

const PagesProyectosJson = [
  {
    title: "Montaje de motor reparado",
    img: "images/img-h.jpeg",
  },
  {
    title: "Chequeo computarizado",
    img: "images/img-i.jpeg",
  },
  {
    title: "Mantenimiento de motor",
    img: "images/img-k.jpeg",
  },
  {
    title: "Alineacion de ruedas",
    img: "images/img-l.jpeg",
  },
  {
    title: "Alineacion de ruedas",
    img: "images/img-m.jpeg",
  },
  {
    title: "Alineacion de ruedas",
    img: "images/img-n.jpeg",
  },
  {
    title: "Alineacion de ruedas",
    img: "images/img-p.jpeg",
  },
  {
    title: "Alineacion de ruedas",
    img: "images/img-q.jpeg",
  },
  {
    title: "Alineacion de ruedas",
    img: "images/img-r.jpeg",
  },
];

const pintarServiciosJson = () => {
  let content = "";
  ServiciosJson.forEach((servicio) => {
    content += `
        <div class="item-servicios">
          <div class="title">${servicio.title}</div>
          <div><img src="${servicio.img}"></div>
          <div class="description">
            <p>${servicio.descriptions}</p>
          </div>
          <a class="servicio_mensaje" href="${servicio.mensaje}" target="_blank">Mas informaci??n!</a>
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
    <div>
      <div class="title">${proyectos.title}</div>
      <div class="item"><img loading="lazy" src="${proyectos.img}" alt="" srcset=""></div>
      </div>`;
  });
  divPagesProyectos.innerHTML = content;
};

pintarServiciosJson();
pintarProyectosJson();
pintarPagesProyectosJson();
clickMenu();
clickProyectos();
clickContactos();
