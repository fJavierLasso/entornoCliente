
//Ejercicio 1
function perimetroRectangulo(a, b) {
    return (a * 2) + (b * 2);
}

document.querySelector('.enviar1').addEventListener("click", function () {

    let base = document.querySelector('#base').value;
    let altura = document.querySelector('#altura').value;

    document.querySelector('.resultado1').innerHTML = `El perímetro será de <b>${Math.round(perimetroRectangulo(base, altura) * 100) / 100}</b>.`;

});

//Ejercicio 2

document.querySelector('.enviar2').addEventListener("click", function () {

    let nAlumnos = document.querySelector('#nAlumnos').value;

    if (nAlumnos < 8 || nAlumnos > 20) {

        document.querySelector('.resultado2').innerHTML =
            "Introduce entre 8 y 20 alumnos";

    } else {
        document.querySelector('.resultado2').innerHTML = "";

        for (let i = 0; i < nAlumnos; i++) {
            document.querySelector('.resultado2').innerHTML += `
            <div class="m-2">
            <label for "alumno${i + 1}">Alumno ${i + 1}</label>
            <input type="text" class="nombreAlumno" id="alumno${i + 1}">
            <label for "nota${i + 1}">Nota</label>
            <input type="text" class="notaAlumno" id="nota${i + 1}">
            <br></div>
            `;
        }

        document.querySelector('.resultado2').innerHTML += ` <button class="btn btn-primary enviar3 mb-3">Enviar</button>`;

    }

    document.querySelector('.enviar3').addEventListener("click", function () {
        let arrayAlumnos = document.querySelectorAll('.nombreAlumno');
        let arrayNotas = document.querySelectorAll('.notaAlumno');
        let media = 0;
        for (let z = 0; z < arrayAlumnos.length; z++) {
            media += parseInt(arrayNotas[z].value);
            document.querySelector('.resultado2').innerHTML += `<br>
        <b>${arrayAlumnos[z].value}</b> ha sacado un <b>${arrayNotas[z].value}</b>`
        }
        document.querySelector('.resultado2').innerHTML += `<br><br>La media de la clase es de <b>${media / arrayAlumnos.length}</b>`;
    });

});

//Ejercicio 3

document.querySelector('#enviarPalabras').addEventListener("click", function () {

    let pGrande = document.querySelector('#pGrande').value.toLowerCase();
    let pPequenia = document.querySelector('#pPequenia').value.toLowerCase();

    for (let i = 0; i < pPequenia.length; i++) {
        if (pGrande.indexOf(pPequenia[i]) === -1) {
            document.querySelector('.resultado3').innerHTML = `Las letras <b>${pPequenia}</b> no están contenidas en <b>${pGrande}</b>.`;
            return false;
        }
    }

    document.querySelector('.resultado3').innerHTML = `Las letras <b>${pPequenia}</b> están contenidas en <b>${pGrande}</b>.`;
    return true;

});










