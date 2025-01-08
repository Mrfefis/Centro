function cargarContenido(id, path) {
    // Obtener archivo
    const archivo = fetch(path);

    // Procesar respuesta
    const contenido = archivo.then(response => {
        if (!response.ok) console.log('No se pudo cargar el archivo: ' + path);
        return response.text();
    });

    // Obtener y cargar datos al dom
    const elemento = document.querySelector(id);

    contenido.then(datos => {
        elemento.innerHTML = datos;
    })
    .catch(error => {
        console.error('Error al cargar el contenido:', error);
    });
}

cargarContenido("#header", "../html/header.html");
cargarContenido("#nav", "../html/nav.html");