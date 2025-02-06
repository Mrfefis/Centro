/* VARIABLES GLOBALES */

const donaciones = [
    {
        foto: "",
        titulo: "Lavarropas para la residencia",
        comentario: "La agrupación logró juntar fondos para poder comprar un lavarropas nuevo para colocar dentro de la residencia."
    },
    {
        foto: "",
        titulo: "Insumos para Medios Audiovusuales",
        comentario: "La agrupación logró comprar aros de luz, trípodes y ... para el laboratorio de Medios Audiovisuales, y para prestar desde el buffet"
    },
    {
        foto: "",
        titulo: "Mesa de tenis",
        comentario: "La agrupación logró comprar una mesa para que los estudiantes puedan jugar y practicar tenis de mesa"
    },
];

/* PROGRAMA PRINCIPAL */

const contenedor = document.querySelector(".donaciones");

for (let datos of donaciones){
    const donacion = createDonacion(datos);
    contenedor.appendChild(donacion);
}

/* SUBPROGRAMAS */

function createDonacion(datos){
    const imagen = document.createElement("img");
    imagen.src = datos.foto;

    const titulo = document.createElement("h3");
    titulo.innerHTML = datos.titulo;

    const fondo = document.createElement("div");
    fondo.classList.add("componente-fondo");

    const parrafo = document.createElement("p");
    parrafo.innerHTML = datos.comentario;
    parrafo.classList.add("componente-parrafo");

    const comentario = document.createElement("div");
    comentario.appendChild(fondo);
    comentario.appendChild(parrafo);

    const donacion = document.createElement("div");
    donacion.classList.add("donacion");
    donacion.appendChild(imagen);
    donacion.appendChild(titulo);
    donacion.appendChild(comentario);

    return donacion;
}