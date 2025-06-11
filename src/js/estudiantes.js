// Función para Asociar las dudas frecuentes con sus contenidos
const checkboxs = document.querySelectorAll('.item-duda-input');

checkboxs.forEach(checkbox => {
    const label = checkbox.closest('.item-duda-label');
    const contenido = label.nextElementSibling;

    checkbox.addEventListener('change', () => {
        if (contenido){
            if (checkbox.checked) {
                contenido.style.display = 'block';
            } else {
                contenido.style.display = 'none';
            }
        }        
    });
});