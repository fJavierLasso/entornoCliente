document.querySelector("#boton1").addEventListener("click", function(){
    if (confirm('¿Seguro que quieres abrir ventana?')) {

        ventana = window.open("./index.html","_blank","width=300,height=200");
    }
});

// 2.- Al presionar este botón, generar un numero aleatorio entre 0 y 3, de forma que si se genera el 0 se abrirá
// la web de gmail.com, si un 1 la web del correo de educamadrid (https://correoweb.educa.madrid.org/), si se
// genera un 2, la web de yahoo, y un 3 la web de Outlook.

document.querySelector("#boton2").addEventListener("click", function(){
    let num = Math.round(Math.random() * 2);
    switch (num) {
        case 0:
            window.open("https://gmail.com/","_blank","width=500,height=500");
            break;
        case 1:
            window.open("https://correoweb.educa.madrid.org/","_blank","width=500,height=500");
            break;
        case 2:
            window.open("https://yahoo.com/","_blank","width=500,height=500");
            break;
        case 3:
            window.open("https://outlook.com/","_blank","width=500,height=500");
        default:
            break;
    }
});

// 3.- Con este botón aparecerá una ventana que ocupará el ancho del monitor y la mitad de su altura y que
// tenga las siguientes propiedades o métodos:
// Se debe mostrar un alert indicando si el navegador tiene activadas las cookies.

document.querySelector("#boton3").addEventListener("click", function(){
    navigator.cookieEnabled?alert("Cookies habilitadas!"):alert("No hay cookies para tí :-(");
});

