
// Ejercicio 1

const resultados1 = document.getElementById("resultados1");
const nombre1 = document.getElementById("intNombre");
const email1 = document.getElementById("intEmail");
const boton1 = document.getElementById("botonEj1");

function ejercicio1(){

    if (nombre1.value && email1.value) {
        resultados1.innerHTML = `${nombre1.value} tiene la dirección de email ${email1.value}`;
    } else {
        resultados1.innerHTML = `Qué tal si rellenas los campos antes, crack?`;
    }
    
}
