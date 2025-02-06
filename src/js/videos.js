/* VARIABLES GLOBALES */

const videos = [
    {nombre: "CERTIFICADO DE ALUMNO REGULAR", link: "#"},
    {nombre: "COMO INSCRIBIRTE A MATERIAS", link: "#"},
    {nombre: "BECAS 2024", link: "#"},
    {nombre: "MATRICULACIÓN EN MOODLE", link: "#"},
    {nombre: "BOLETO ESTUDIANTIL GRATUITO", link: "#"},
];

/* PROGRAMA PRINCIPAL */

const dudasFrecuentes = document.querySelector(".dudas-frecuentes");

for (let video of videos){
    const duda = createDuda(video);
    dudasFrecuentes.appendChild(duda);
}

/* SUBPROGRAMAS */

function createDuda(video){
    const duda = document.createElement("a");
    duda.classList.add("duda");
    duda.innerHTML = video.nombre;
    duda.href = video.link;

    return duda;
}