// Array de noticias (bicola)
const noticias = [
    {
        titulo: "Título de la Noticia 1",
        descripcion: "Un breve resumen o descripción de la noticia 1.",
        imagen: "../../img/noticia_ej1.jpg",
        enlace: "https://example.com/noticia1"
    },
    {
        titulo: "Título de la Noticia 2",
        descripcion: "Un breve resumen o descripción de la noticia 2.",
        imagen: "../../img/noticia_ej2.jpg",
        enlace: "https://example.com/noticia2"
    },
    {
        titulo: "Título de la Noticia 3",
        descripcion: "Un breve resumen o descripción de la noticia 3.",
        imagen: "../../img/noticia_ej3.jpg",
        enlace: "https://example.com/noticia3"
    }
];

// Índice actual de la noticia
let indiceActual = 0;

// Referencias al DOM
const noticiaImg = document.querySelector(".noticia img");
const noticiaTitulo = document.querySelector(".info h2");
const noticiaDescripcion = document.querySelector(".info p");
const noticiaEnlace = document.querySelector(".info .leer-mas");

// Variable para controlar el estado de la animación
let animacionEnProgreso = false;

// Función para actualizar la noticia
function actualizarNoticia() {
    const noticia = noticias[indiceActual];

    // Transición suave al cambiar el contenido
    document.querySelector(".noticia").classList.add("fade-out");
    setTimeout(() => {
        noticiaImg.src = noticia.imagen;
        noticiaTitulo.textContent = noticia.titulo;
        noticiaDescripcion.textContent = noticia.descripcion;
        noticiaEnlace.href = noticia.enlace;

        document.querySelector(".noticia").classList.remove("fade-out");
        document.querySelector(".noticia").classList.add("fade-in");
        setTimeout(() => {
            document.querySelector(".noticia").classList.remove("fade-in");
            animacionEnProgreso = false;
        }, 500);
    }, 500);
}

// Función para cambiar noticia hacia la derecha
function cambiarNoticiaDerecha() {
    // Salir si la animación está en progreso
    if (animacionEnProgreso) return;
    animacionEnProgreso = true;
    indiceActual = (indiceActual + 1) % noticias.length;
    actualizarNoticia();
}

// Función para cambiar noticia hacia la izquierda
function cambiarNoticiaIzquierda() {
    // Salir si la animación está en progreso
    if (animacionEnProgreso) return;
    animacionEnProgreso = true;
    indiceActual = (indiceActual - 1 + noticias.length) % noticias.length;
    actualizarNoticia();
}

actualizarNoticia();