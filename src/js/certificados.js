/* VARIABLES GLOBALES */

const certificados = [
    {texto: "Examen Final", link: ""},
    {texto: "Examen Parcial", link: ""},
    {texto: "Cambio de comisión", link: ""},
    {texto: "Equivalencias Externas", link: ""},
    {texto: "Cambio de carrera y simultaneidad", link: ""},
    {texto: "Superposición horaria", link: ""},
    {texto: "Emisión promoción", link: ""},
    {texto: "Emisión de analítico", link: ""},
    {texto: "Emisión de diploma", link: ""}
];

const imagenLink = "";

/* PROGRAMA PRINCIPAL */

const lista = document.querySelector(".certificados ul");

for (let certificado of certificados){
    const item = createItem(certificado);
    lista.appendChild(item);
}

/* SUBPROGRAMAS */

function createItem(certificado){
    const imagen = document.createElement("img");
    imagen.src = imagenLink;

    const texto = document.createElement("p");
    texto.innerHTML = certificado.texto;

    const anchor = document.createElement("a");
    anchor.href = certificado.link;
    anchor.classList.add("certificado-item");
    anchor.appendChild(imagen);
    anchor.appendChild(texto);
    
    const item = document.createElement("li");
    item.appendChild(anchor);
    return item;
}