
let ventana;

document.querySelector('#botonOpen').addEventListener("click",function(){
   ventana = window.open("https://www.w3schools.com", "_blank", "width=800,height=400");
   iniciarCuentaAtras();
});

document.querySelector('#botonClose').addEventListener("click",function(){
    ventana.close();
});

function iniciarCuentaAtras(){
    
    setTimeout(function(){
        ventana.close();
    }
    ,10000);
}