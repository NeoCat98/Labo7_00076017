//Usando "document.getElementById"
//Ejercicio 1
var container;
//Ejercicio 2
container = document.getElementById("c1");
//Ejercicio 3   
container.innerText = "¡Hola Mundo!";
//Ejercicio 4
container.setAttribute("style","background-color:#000000");
//Ejercicio 5
container.style.color= "#1cb723";
//Ejercicio 6
container.style.width="200px";
container.style.height="200px";
//Ejercicio 7
container.innerHTML = "<input type='text' placeholder=’escriba su texto’>";


//Usando "document.getElementsByClassName"
//Ejercicio 1
containers = document.getElementsByClassName("c2"); 
//Ejercicio 2
for (i = 0; i < containers.length; i++){
    containers[i].style.backgroundColor="#009999";
}
//Ejercicio 3
for (i = 0; i <  containers.length; i++) {
    containers[i].innerHTML =  "<input type='text' placeholder='Escriba su texto'>";
}


//Eventos
//Ejercicio 1
boton = document.getElementById("btn-click");

//Ejercicio 2
boton.onclick = function(evt)
{ alert("Hola mundo");
}
//Ejercicio 3
btnCopy = document.getElementById("btnCopy");
//Ejercicio 4
btnCopy.onclick = function(evt)
{
    let msj = document.getElementById("textMsj").value;
    document.getElementById("showMsj").innerText = msj;
} 