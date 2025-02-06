/* VARIABLES GLOBALES */

const emprendimientos = [
    {imagen: "", nombre: "Categoria", link: ""},
    {imagen: "", nombre: "Categoria", link: ""},
    {imagen: "", nombre: "Categoria", link: ""},
    {imagen: "", nombre: "Categoria", link: ""},
    {imagen: "", nombre: "Categoria", link: ""},
    {imagen: "", nombre: "Categoria", link: ""},
    {imagen: "", nombre: "Categoria", link: ""},
    {imagen: "", nombre: "Categoria", link: ""},
];

/* PROGRAMA PRINCIPAL */

const tarjetas = document.querySelector(".emprendimientos");

for (let emprendimiento of emprendimientos){
    const tarjeta = createTarjeta(emprendimiento);
    tarjetas.appendChild(tarjeta);
}

/* SUBPROGRAMAS */

function createTarjeta(emprendimiento){
    const imagen = document.createElement("img");
    imagen.src = emprendimiento.imagen;
    //const imagenCont = document.createElement("div");
    //imagenCont.appendChild(imagen);

    const parrafo = document.createElement("p");
    parrafo.innerHTML = emprendimiento.nombre;

    const tarjeta = document.createElement("a");
    tarjeta.href = emprendimiento.link;
    tarjeta.classList.add("tarjeta");
    tarjeta.appendChild(imagen);
    tarjeta.appendChild(parrafo);

    return tarjeta;
}