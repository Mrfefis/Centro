const personas = [
    {nombre: "Micaela Ledesma", titulo: "Presidenta", foto: ""},
    {nombre: "Micaela Ledesma", titulo: "Presidenta", foto: ""},
    {nombre: "Micaela Ledesma", titulo: "Presidenta", foto: ""},
    {nombre: "Micaela Ledesma", titulo: "Presidenta", foto: ""},
    {nombre: "Micaela Ledesma", titulo: "Presidenta", foto: ""},
    {nombre: "Micaela Ledesma", titulo: "Presidenta", foto: ""},
    {nombre: "Micaela Ledesma", titulo: "Presidenta", foto: ""},
    {nombre: "Micaela Ledesma", titulo: "Presidenta", foto: ""},
];


function createTarjeta(persona){
    const tarjeta = document.createElement('div');
    tarjeta.classList.add('tarjeta');
    
    const foto = document.createElement('div');
    foto.classList.add('foto');
    
    const img = document.createElement('img');
    img.src = persona.foto;
    
    foto.appendChild(img);
    
    const texto = document.createElement('div');
    texto.classList.add('texto');
    
    const p = document.createElement('p');
    p.classList.add('nombre');
    p.textContent = persona.nombre;
    
    texto.appendChild(p);
    
    tarjeta.appendChild(foto);
    tarjeta.appendChild(texto);
    
    return tarjeta;
}

const integrantes = document.querySelector(".integrantes");

for (let persona of personas){
    const tarjeta = createTarjeta(persona);
    integrantes.appendChild(tarjeta);
} 
