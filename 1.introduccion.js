const contenido = document.getElementById("contenido");

let nombre = "Javier";
let edad = 29;

contenido.innerHTML = `<h2>${nombre}</h2>`;
contenido.innerHTML += `<h3>${edad}</h3>`;
console.log(nombre,edad);
for(let i = 0; i < 11; i++){

    if (i % 2 == 0) {
        contenido.innerHTML += `${i} `;
    }
}



contenido.innerHTML += `<br>La tercera letra es <b>${nombre.substring(2,3)}.</b>`;

let nombres = ["Francisco","Javier","Lasso","Pons"];

contenido.innerHTML += `<br>`;
nombres.forEach(element => {
    contenido.innerHTML += `${element} `;
});

contenido.innerHTML += `<br>${nombres[2]}`;
