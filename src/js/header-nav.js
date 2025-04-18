async function cargarContenido(id, path) {
    try {
        const archivo = await fetch(path);
        const elemento = document.querySelector(id);

        if (!archivo.ok) {
            elemento.innerHTML = `<p>Error: No se pudo cargar el contenido desde ${path}</p>`;
            return;
        }

        const datos = await archivo.text();
        elemento.innerHTML = datos;

    } catch (error) {
        const elemento = document.querySelector(id);
        elemento.innerHTML = `<p>Error al cargar el contenido. Por favor, inténtalo más tarde.</p>`;
        console.error(`Error al cargar el contenido (${path}):`, error);
    }
}

cargarContenido("#header", "../html/header.html");
cargarContenido("#nav", "../html/nav.html");
cargarContenido("#footer", "../html/footer.html");