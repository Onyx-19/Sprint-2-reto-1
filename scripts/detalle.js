import { data } from "./data.js";

let contenedorbody = document.getElementById("detalleContainer");
let template = document.getElementById("templateDetalle").content;
let fragment = document.createDocumentFragment();

data.forEach(element => {
    
    const {id, nombre, img, descripcion, duracion} = element;

    if(id == 1){
        template.getElementById("nombre").textContent = nombre;
        template.getElementById("detalleImg").setAttribute("src", img);
        template.getElementById("detalleDescripcion").textContent = descripcion;
        template.getElementById("detalleDuracion").textContent = "Duracion:" + duracion;

        fragment.appendChild(template);
    }
});
contenedorbody.appendChild(fragment);
