function crearLista(){
    var nuevaLista = document.createElement("ol");
    var tituloLista = document.createElement("h4");
    var elementoLista = document.createElement("li");
    var elemneto2Lista = document.createElement("li");
    
    var body = document.getElementsByTagName("body")[0];

    nuevaLista.id = "listaBebidas";
    
    tituloLista.innerHTML = "Bebidas";
    elementoLista.innerHTML = "Agua";
    elemneto2Lista.innerHTML = "Sopa de Lima";
    
    
    body.appendChild(nuevaLista); 
    nuevaLista.appendChild(tituloLista);
    nuevaLista.appendChild(elementoLista);
    nuevaLista.appendChild(elemneto2Lista);
      
    
}

function arreglarMenu(){
    var listaBebidas = document.getElementById("listaBebidas");
    var hijosListaBebidas = listaBebidas.childNodes;
    var nodoSopaDeLima = hijosListaBebidas[2];
    listaBebidas.removeChild(nodoSopaDeLima);
    
    var listaComida = document.getElementById("ListaOrdenada");
    listaComida.appendChild(nodoSopaDeLima);
    console.log(hijosListaBebidas);
}
crearLista();
arreglarMenu();