function generarCalendario(nombreMes, diaInicio, totalDias) {
    const diasSemana = ["L", "M", "M", "J", "V", "S", "D"];
  
    // Mapeo de día inicial a índice
    const diaIndice = {
      "L": 0,
      "M": 1,
      "X": 2,
      "J": 3,
      "V": 4,
      "S": 5,
      "D": 6
    };
  
    const calendario = document.createElement("div");
    calendario.className = "calendario";
  
    // Título del mes
    const titulo = document.createElement("h2");
    titulo.textContent = nombreMes;
    calendario.appendChild(titulo);
  
    // Cabecera de días de la semana
    const cabecera = document.createElement("div");
    cabecera.className = "dias-semana";
  
    ["L", "M", "M", "J", "V", "S", "D"].forEach(dia => {
      const span = document.createElement("span");
      span.textContent = dia;
      if (dia==="S" || dia ==="D") {
        span.classList.add("dias-no-habiles");
      } else {
        span.classList.add("dias-habiles");
      }
      cabecera.appendChild(span);
    });
  
    calendario.appendChild(cabecera);
  
    // Contenedor de días
    const cuerpoDias = document.createElement("div");
    cuerpoDias.className = "dias";
  
    // Día de la semana en que empieza el mes
    const inicioIndex = diaIndice[diaInicio.toUpperCase()] ?? 0;
  
    // Rellenar espacios en blanco antes del primer día
    for (let i = 0; i < inicioIndex; i++) {
      const empty = document.createElement("span");
      empty.className = "vacio";
      cuerpoDias.appendChild(empty);
    }
  
    // Generar días del mes
    for (let i = 1; i <= totalDias; i++) {
      const dia = document.createElement("span");
      dia.className = "dia";
      dia.textContent = i;
      dia.dataset.dia = i; // útil para después seleccionar y aplicar estilos
      cuerpoDias.appendChild(dia);
    }
  
    calendario.appendChild(cuerpoDias);
  
    return calendario;
  }
  
const lugar_calendario = document.getElementById("calendario-dinamico");
const calendarios = [];

calendarios.push(generarCalendario("ENERO", "X", 31));
calendarios.push(generarCalendario("FEBRERO", "S", 28));
calendarios.push(generarCalendario("MARZO", "S", 31));
calendarios.push(generarCalendario("ABRIL", "M", 30));
calendarios.push(generarCalendario("MAYO", "J", 31));
calendarios.push(generarCalendario("JUNIO", "D", 30));
calendarios.push(generarCalendario("JULIO", "M", 31));
calendarios.push(generarCalendario("AGOSTO", "V", 31));
calendarios.push(generarCalendario("SEPTIEMBRE", "L", 30));
calendarios.push(generarCalendario("OCTUBRE", "X", 31));
calendarios.push(generarCalendario("NOVIEMBRE", "S", 30));
calendarios.push(generarCalendario("DICIEMBRE", "L", 31));

calendarios.forEach(calendario => lugar_calendario.appendChild(calendario));

