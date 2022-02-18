const FORM = document.getElementById("form");

FORM.addEventListener("submit", (e) => {
    e.preventDefault();

    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    telefono = document.getElementById("telefono").value;
    direccion = document.getElementById("direccion").value;
    observaciones = document.getElementById("observaciones").value;

    console.log(nombre,apellido,telefono,direccion,observaciones);
    localStorage.setItem("Nombre", nombre);
    localStorage.setItem("Apellido:", apellido);
    localStorage.setItem("Telefono:", telefono);
    localStorage.setItem("Direccion:", direccion);
    localStorage.setItem("Observacion:", observaciones);

    alert ("Se han almacenado los datos correctamente")
}) 

