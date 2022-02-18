import { data } from "./data.js";

let contenedorbody = document.querySelector("#contenedor");
let template = document.getElementById("template").content;
let fragment = document.createDocumentFragment();

data.forEach(element => {
    
    const {id, nombre, img} = element;

    template.querySelector("#nameMovie").textContent = nombre;
    template.querySelector("img").setAttribute("src", img);

    const clone = template.cloneNode(true);
    fragment.appendChild(clone);
});
contenedorbody.appendChild(fragment);

