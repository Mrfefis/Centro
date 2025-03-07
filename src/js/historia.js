const epocas = [
    {
        tiempo: 2022,
        contenidos: [
            {
                imagen: "",
                parrafos: [
                    " El 14 de Marzo un grupo de estudiantes de la UNTDF se reunieron con el fin" +
                    " de formar una agrupación por y para lxs estudiantxs, para poder brindar una" + 
                    " mejor experiencia universitaria. De esta forma nació PEA"
                ],
            },
            {
                imagen: "",
                parrafos: [
                    " 29 de marzo, hicimos nuestra primer presentación de listas de candidatxs" +
                    " a elecciones de Centro de Estudiantes - Ushuaia - UNTDF",
                    "26 de abril ganamos las elecciones a Centro de Estudiantes Ushuaia UNTDF",
                    "6 de mayo asumimos como autoridades del Centro de Estudiantes Ushuaia"
                ],
            },
        ],
    },
    {
        tiempo: 2023,
        contenidos: [],
    },
    {
        tiempo: 2024,
        contenidos: [],
    },
];

function buscarEpoca(tiempo){
    tiempo = Number(tiempo);
    for (let epoca of epocas){
        if (epoca.tiempo===tiempo)
            return epoca;
    }
    return null;
}

function createContenido(contenido, invertir = false){
    const contenedor = document.createElement("div");
    contenedor.classList.add("historia-item");

    const imagen = document.createElement("img");
    imagen.src = contenido.imagen;
    
    const lista = document.createElement("ul");
    lista.classList.add("item-lista");
    for (let info of contenido.parrafos) {
        const item = document.createElement("li");
        item.classList.add("item-texto");
        
        const parrafo = document.createElement("p");
        parrafo.innerHTML = info;

        item.appendChild(parrafo);
        lista.appendChild(item);
    }

    let mediaQuery = window.matchMedia("(max-width: 768px)");

    if (mediaQuery.matches) {
        invertir = false;
    }

    if (invertir){
        contenedor.appendChild(lista);
        contenedor.appendChild(imagen);
    } else {
        contenedor.appendChild(imagen);
        contenedor.appendChild(lista);
    }

    document.querySelector(".historia-container").appendChild(contenedor);
}

function cargarContenidos(contenidos){
    const historias = document.querySelector(".historia-container");

    // Elimina todos los hijos del elemento padre
    while (historias.firstChild) {
        historias.removeChild(historias.firstChild);
    }

    invertir = false;
    for (let contenido of contenidos){
        createContenido(contenido, invertir);
        invertir = !invertir;
    }
}

function cargarLinea(){
    const lista = document.createElement("ul");
    lista.classList.add("linea-tiempo");

    for (let epoca of epocas){
        const li = document.createElement("li");
        li.classList.add("item-tiempo");

        const boton = document.createElement("button");
        boton.innerHTML = "" + epoca.tiempo;

        boton.addEventListener("click", () => {
            const epoca = buscarEpoca(boton.innerHTML);
            if (epoca==null)
                return;

            cargarContenidos(epoca.contenidos);
        });

        li.appendChild(boton);
        lista.appendChild(li);
    }

    document.querySelector(".historia-opciones").appendChild(lista);
}

cargarLinea();

cargarContenidos(buscarEpoca("2022").contenidos);