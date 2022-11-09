
//EJERCICIO 1

let interval;

function mostrarDoce(){
    var date = new Date();
    document.querySelector(".resultado1").textContent = date.toLocaleString('es-ES', { hour: 'numeric', minute: 'numeric', hour12: true });  
    clearInterval(interval);
    interval = null;
    interval = setInterval(mostrarDoce,1000);
};

function mostrarDetallada(){
    var date = new Date();
    document.querySelector(".resultado1").textContent = date.toLocaleString('es-ES', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false });
    clearInterval(interval);
    interval = null;
    interval = setInterval(mostrarDetallada,1000);
}

mostrarDoce();

document.querySelector('#doceH').addEventListener("click", function(){
    mostrarDoce();
});
document.querySelector('#hDetallada').addEventListener("click", function(){
    mostrarDetallada();
});

//EJERCICIO 2

document.querySelector('#enviarEj2').addEventListener("click", function(){

    let titulo = document.querySelector(".titulo").value;
    let autor = document.querySelector(".autor").value;
    let estreno = document.querySelector(".estreno").value;

    function sinEspacios(elemento) {
        return elemento.replace(/\s/g, "").length;
    }

    function aMayus(elemento) {
        return elemento.toUpperCase();
    }

    function aMinus(elemento) {
        return elemento.toLowerCase();
    }

    document.querySelector('.respuesta2').innerHTML += `Carácteres del título sin espacios: ${sinEspacios(titulo)}<br>
                                                        Carácteres del autor sin espacios: ${sinEspacios(autor)}<br>
                                                        Título en mayus y minus: ${aMayus(titulo)} ${aMinus(titulo)}<br>
                                                        Autor en mayus y minus: ${aMayus(autor)} ${aMinus(autor)}<br><br>
                                                        Título: ${titulo} <br>
                                                        Autor: ${autor} <br>
                                                        Año: ${estreno} <br>`;

});




