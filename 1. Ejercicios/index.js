
// 1.- Pedir tres números y mostrarlos ordenados de mayor a menor. 
function ejercicio1(){
    var numeros = []; 
    document.querySelectorAll(".ej1").forEach(element => {
        numeros.push(parseInt(element.value));
    });
    numeros.sort((a,b)=>b-a);
    document.querySelector(".resultado1").textContent = `Los números ordenados de mayor a menor son ${numeros}.`;
}
// 2.- Pedir un número entre 0 y 9999 y decir cuantas cifras tiene.
function ejercicio2(){
    var numero = parseInt(document.querySelector(".ej2").value);
    document.querySelector(".resultado2").textContent = `La longitud es de ${numero.toString().length} caracteres.`;

}

// 3.- Pedir un número entre 0 y 9999 y mostrarlo con las cifras al revés.

function ejercicio3(){

    var numero = parseInt(document.querySelector(".ej3").value.toString());
    var digitosStr = numero.toString().split('').reverse();
    document.querySelector(".resultado3").textContent = `El num invertido es ${digitosStr.join('')}`;   
}

//4.- Pedir un número entre 0 y 9999 y decir si es capicúa.
function ejercicio4(){

    var numero = parseInt(document.querySelector(".ej4").value.toString());
    var numeroInvertido = numero.toString().split('').reverse().join('');
    document.querySelector(".resultado4").textContent = (numero==numeroInvertido)?"Es capicúa.":"No es capicúa.";
    
}
