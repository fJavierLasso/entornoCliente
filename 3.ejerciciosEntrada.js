
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

// Ejercicio 2

const radio2 = document.getElementById("intRadio");
const resultados2= document.getElementById("resultados2");
function ejercicio2(){

    if (radio2.value) {
        resultados2.innerHTML = `El área que buscas es ${Math.round(Math.PI * Math.pow(radio2.value,2)*100)/100}`;
    } else {
        resultados2.innerHTML = `Qué tal si rellenas los campos antes, crack?`;
    }
}

//Ejercicio 3
const resultados3= document.getElementById("resultados3");
function ejercicio3(){
    
    //declaro dentro de la función porque si no, no cogería ningún valor!
    var edades = document.querySelectorAll(".edadEj3");

    var edadesInt = [];
    
    //todos los document.get son HTMLobject. Podemos coger su value y transformarlo al tipo que queramos para trabajarlo.
    for($=0;$<edades.length;$++){
        edadesInt.push(parseInt(edades[$].value));
    }

    //magia entre ints.
    edadesInt.sort();

    var pregunta1 = edadesInt[0] + edadesInt[edadesInt.length-1];
    var pregunta2 = edadesInt[1] * edadesInt[2];

    resultados3.innerHTML = `El mayor y el menor suman ${pregunta1}. Los dos del medio multiplicados hacen ${pregunta2}.`;
    
}






