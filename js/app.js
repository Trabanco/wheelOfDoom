function app() {
    const playerInput = document.getElementById('input')
    const addButton = document.getElementById('add')
    const playButton = document.getElementById('play')
    const listPlayers = document.getElementById('orderlist')
    const boxOfPlayers = document.querySelector('.boxes')
    const colors = ['D93C51', 'F6EB15', '4893D8', 'A642AD', '4C6BDB', '186887', 'DF3C54', 'ED8EF7', 'F6EB15', 'F98323', 'ED8EF7', '52ADA8', 'E599B7', 'D93C51', '906A31', 'A642AD', '4893D8', '55DC80']
    const startPlayers = ['Fran', 'Bea', 'Susana', 'Mario', 'Buda', 'Max']
    let playersListArray = []


    startPlayers.map((element, index) => {
        addPlayersToArray(element, index)
    });

    addButton.onclick = function() {
        if (playerInput.value.trim() !== '') {
            addPlayersToArray(playerInput.value, playerInput.id)
        }
        playerInput.value = ''
        playerInput.focus()
    }

    document.getElementById('orderlist').addEventListener('click', (event) => {
        let buttonListClassName = event.target.className
        const indexInArray = event.target.parentNode.id
        buttonListClassName = buttonListClassName.split(' ')
        if (buttonListClassName[1] == 'delete') {
            deletePlayer(indexInArray)
        }
        if (buttonListClassName[1] == 'edit') {
            editPlayer(indexInArray)
        }
    })

    function editPlayer(indexInArray) {
        playerInput.value = playersListArray[indexInArray]
        playerInput.id = indexInArray
    }

    function addPlayersToArray(player, index) {
        if (index < 0) {
            playersListArray.push(player)
        }
        if (!isNaN(index)) {
            playersListArray[index] = player
            playerInput.id = '-1'
        }
        renderList(playersListArray)
        renderBox(playersListArray)
    }

    function renderList(arrayOfPlayers) {
        listPlayers.innerHTML = ''
        arrayOfPlayers.map((element, index) => {
            const buttonsOnList = `<div class="button-container" id="${index}"><div class="buttonlist edit"></div><div class="buttonlist delete"></div></div>`
            const newLine = document.createElement('div')
            newLine.id = index
            newLine.className = 'boxlist'
            listPlayers.appendChild(newLine).innerHTML = `<p>${element}</p>${buttonsOnList}`
        })
    }

    function renderBox(arrayOfPlayers) {
        boxOfPlayers.innerHTML = ''
        arrayOfPlayers.map((element, index) => {
            const newBox = document.createElement('div')
            newBox.style.backgroundColor = `#${getRandomColor()}`
            newBox.id = index
            newBox.className = 'box'
            boxOfPlayers.appendChild(newBox).textContent = element
        })
    }

    function getRandomColor() {
        randomColor = Math.ceil(Math.random() * (colors.length))
        return colors[randomColor]
    }

    //############################################

    //genera entero aleatorio entre dos numeros min(incluido) max(excluido)
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    playButton.onclick = function() {
        //comprobar que la lista no está vacia:
        if (playersListArray.length > 1) {
            const index = getRandomNumber(0, playersListArray.length);
            deletePlayer(index);
            // actualizarHtml(index); //actualiza el html despues de eliminar los jugadores
        } else {
            alert("Necesitas dos jugadores como mínimo");
        }
        if (playersListArray.length == 1) {
            console.log('Ganador')
            playersListArray.map(element => {
                alert(element + ' - Eres el GANADOR')
            })
        }
    }


    //muestra por consola el jugador que se elimina atendiendo a una posicion aleatoria que se le pasa por parametro
    function deletePlayer(posicion) {
        //console.log("se elimina el jugador de la posición playersListArray[indice random]-> "+posicion);
        //console.log("nombre "+playersListArray[posicion]);
        //console.log("length antes de eliminar->"+playersListArray.length);
        alert(playersListArray[posicion] + ' - Ha sido eliminado')
        playersListArray.splice(posicion, 1); // sentencia que elimina el jugador del array
        //console.log("length despues de eliminar->" + playersListArray);
        renderList(playersListArray)
        renderBox(playersListArray)
    }

    /*
     function actualizarHtml(index) {
         $(".box").eq(index).remove(); //elimina el player del boxcontent


         let listPlayers = document.getElementById("orderlist");
         listPlayers.getElementsByClassName("boxplay")[index].remove(); //elimina el player de la lista
     }
     */
}

app()