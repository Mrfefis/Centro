/* VARIABLES GLOBALES */

const tarjetas = [
    {materia: "MacroEconomía", imagen: "../../img/clases/algebra.jpg", profe: "", destinada: "",lugar: "", horario: ""},
    {materia: "Metodología", imagen: "../../img/clases/algebra.jpg", profe: "", destinada: "",lugar: "", horario: ""},
    {materia: "Álgebra", imagen: "../../img/clases/algebra.jpg", profe: "", destinada: "",lugar: "", horario: ""},
    {materia: "Economía", imagen: "../../img/clases/algebra.jpg", profe: "", destinada: "",lugar: "", horario: ""},
    {materia: "Derecho", imagen: "../../img/clases/algebra.jpg", profe: "", destinada: "",lugar: "", horario: ""},
    {materia: "Comunicación Social", imagen: "../../img/clases/algebra.jpg", profe: "", destinada: "",lugar: "", horario: ""},
    {materia: "Química", imagen: "../../img/clases/algebra.jpg", profe: "", destinada: "",lugar: "", horario: ""},
    {materia: "Elementos de Informática", imagen: "../../img/clases/algebra.jpg", profe: "", destinada: "",lugar: "", horario: ""},
];

/* PROGRAMA PRINCIPAL */

document.getElementById("volver").addEventListener("click", () => {
    const main = document.querySelector("main");
    const tarjeta = document.querySelector(".tarjeta");
    if (tarjeta!=null) {
        main.removeChild(tarjeta);
        const clases = document.querySelector(".clases");
        clases.style.display = "grid";
    }
});

for (let clase of tarjetas) {
    const titulo = createClase(clase.materia);
    document.querySelector(".clases").appendChild(titulo);
}

/* SUBPROGRAMAS */

function createClase(texto){
    const clase = document.createElement("a");
    clase.classList.add("clase");
    clase.addEventListener("click", () => mostrarTarjeta(clase.innerText));

    const parrafo = document.createElement("p");
    parrafo.innerHTML = texto;

    clase.appendChild(parrafo);
    return clase;
}

function createTarjeta(clase){
    const imagen = document.createElement("img");
    const contImagen = document.createElement("div");
    imagen.src = clase.imagen;
    contImagen.appendChild(imagen);
    contImagen.classList.add("tarjeta-imagen");

    const profe = document.createElement("p");
    profe.innerHTML = "Persona a cargo: " + clase.profe;
    profe.classList.add("tarjeta-profe");

    const destinada = document.createElement("p");
    destinada.innerHTML = "Destinada a carreras de: " + clase.destinada;

    const lugar = document.createElement("p");
    lugar.innerHTML = "Lugar: " + clase.lugar;

    const horario = document.createElement("p");
    horario.innerHTML = "Horario: " + clase.horario;

    const boton = document.createElement("button");
    boton.innerHTML = "Inscripción";
    boton.classList.add("tarjeta-boton");

    const contDescripcion = document.createElement("div");
    contDescripcion.classList.add("tarjeta-descripcion");
    contDescripcion.appendChild(profe);
    contDescripcion.appendChild(destinada);
    contDescripcion.appendChild(lugar);
    contDescripcion.appendChild(horario);
    contDescripcion.appendChild(boton);

    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");
    tarjeta.appendChild(contImagen);
    tarjeta.appendChild(contDescripcion);
    
    return tarjeta;
}

function mostrarTarjeta(materia){
    for (let tarjeta of tarjetas) {
        if (tarjeta.materia === materia){
            const nuevaTarjeta = createTarjeta(tarjeta);
            const main = document.querySelector("main");
            const clases = document.querySelector(".clases");
            clases.style.display = "none";
            main.appendChild(nuevaTarjeta);
            return;
        }
    }
}