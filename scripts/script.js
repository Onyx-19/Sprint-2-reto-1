let container = document.getElementById("nameMovie");

let array = [
    {img: "./img/pelicula1.jpg", nombre: "Capitan america"},
    {img: "./img/pelicula2.jpg", nombre: "Joker"},
    {img: "./img/pelicula3.jpg", nombre: "Iron man"},
    {img: "./img/pelicula4.jpg", nombre: "Thor"},
    {img: "./img/pelicula5.jpg", nombre: "Spiderman"},
    {img: "./img/pelicula6.jpg", nombre: "Shazam"},
    {img: "./img/pelicula7.jpg", nombre: "Los vengadores"},
    {img: "./img/pelicula8.jpg", nombre: "Venom"},
    {img: "./img/pelicula9.jpg", nombre: "Batman"},
]

array.forEach(element => {
    
    let images = document.createElement("img")
    let total = document.createElement("h5");
    images.src = element.img;
    total.textContent = element.nombre;
    document.body.appendChild(images);
    document.body.appendChild(total);
    
});


//_________________________________________
    // let total = document.createElement("h5");
    
    // total.textContent = name;
    // // total.id = "result";
    // fragment.appendChild(total);
    // element.appendChild(fragment);
    // console.log(name);
    // console.log(picture);
//      ___

