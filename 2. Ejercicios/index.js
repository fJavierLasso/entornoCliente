//EJ 1
function ejercicio1() {
    var valorMin = parseInt(document.querySelector("#input1").value.toString());
    var valorMax = parseInt(document.querySelector('#input2').value.toString());
    var incrementos = (valorMax - valorMin) / 9;
    var arrayValores = [parseInt(valorMin)];

    //valor grande - valor pequeño. Lo que salga es la cantidad de ++ a hacer.
    //esa cantidad entre diez es el intervalo de los incrementos.

    for (var $ = 0; $ < 8; $++) {
        var subida = arrayValores[$] + incrementos;
        arrayValores.push(Math.round(subida * 100) / 100);
    }

    arrayValores.push(parseInt(valorMax));

    console.log(arrayValores);
    //Hasta aquí crear una array con 10 valores. Todo correcto.

    //Si pasamos de celsius a fahrenheit:
    if (document.querySelector("#flexSwitchCheckDefault").checked) {

        document.querySelector(".resultados").innerHTML =
            `
        <tr>
            <td><strong>Fahrenheit</strong></td>
            <td><strong>Celsius</strong></td>
        </tr>
        `;

        arrayValores.forEach(element => {
            document.querySelector(".resultados").innerHTML +=
                `<tr>
            <td>${element}ºF</td>
            <td>${Math.round(((element-32)*5/9)*10)/10}ºC</td>
            </tr>
            `;
        });

        //Si pasamos de fahrenheit a celsius:
    } else {
        document.querySelector(".resultados").innerHTML =
            `
        <tr>
            <td><strong>Celsius</strong></td>
            <td><strong>Fahrenheit</strong></td>
        </tr>
        `;

        arrayValores.forEach(element => {
            document.querySelector(".resultados").innerHTML +=
                `<tr>
            <td>${element}ºC</td>
            <td>${Math.round(((element*9/5)+32)*10)/10}ºF</td>
            </tr>
            `;
        });
    }
}

//EJ 2

document.querySelector(".adivinar").onclick = function(){
    document.querySelector(".resultado2").textContent =`Es el ${Math.round(Math.random()*100)}?`;
};

document.querySelector(".adivinado").onclick = function(){
    document.querySelector(".resultado2").textContent = "Pues qué bien.";
};

