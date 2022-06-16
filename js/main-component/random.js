 //genera entero aleatorio entre dos numeros min(incluido) max(excluido)
 function dameAleatorio(min,max){
    return Math.floor(Math.random() * (max - min)) + min;
}

playButton.onclick = function () {

    //comprobar que la lista no está vacia:
    if (playersListArray.length > 0) {
        var index = dameAleatorio(0, playersListArray.length);
        eliminarJugador(index); 
        actualizarHtml(index); //actualiza el html despues de eliminar los jugadores

    } else {
        alert("lista vacia");
    }

}

//muestra por consola el jugador que se elimina atendiendo a una posicion aleatoria que se le pasa por parametro
function eliminarJugador(posicion) {
    console.log("se elimina el jugador de la posición playersListArray[indice random]-> "+posicion);
    console.log("nombre "+playersListArray[posicion]);
    console.log("length antes de eliminar->"+playersListArray.length);
    playersListArray.splice(posicion,1); // sentencia que elimina el jugador del array
    console.log("length despues de eliminar->"+playersListArray.length);
   
}

function actualizarHtml(index){
    $(".box").eq(index).remove(); //elimina el player del boxcontent

   
    let listPlayers = document.getElementById("orderlist");
    listPlayers.getElementsByClassName("boxplay")[index].remove(); //elimina el player de la lista
}