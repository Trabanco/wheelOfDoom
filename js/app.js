function app() {
    const addButton = document.getElementById('add')
    const editButton = document.querySelector(".edit")
    const deleteButton = document.querySelector(".delete")
    const playButton = document.getElementById('play')
    const colors = ['D93C51', 'F6EB15', '4893D8', 'A642AD', '4C6BDB', '186887', 'DF3C54', 'ED8EF7', 'F6EB15', 'F98323', 'ED8EF7', '52ADA8', 'E599B7', 'D93C51', '906A31', 'A642AD', '4893D8', '55DC80']
    const startPlayers = ['Bea', 'Susana', 'Mario', 'Buda', 'Max']
    let playersListArray = []


    startPlayers.map(element => {
        addPlayerToList(element)
        addPlayerToBox(element)
    });


    addButton.onclick = function() {
        const player = document.getElementById('input')
        if (player.value.trim() !== '') {
            addPlayerToList(player.value)
            addPlayerToBox(player.value)

        }
        player.value = ''
        player.focus()
    }


    function addPlayerToList(player) {
        buttonsOnList = '<button type="button" class="buttonlist edit"></button><button type="button" class="buttonlist delete"></button>'
        let listPlayers = document.getElementById('orderlist')
        const newLine = document.createElement('div')
        newLine.className = 'boxlist'
        player = `<p>${player}</p>${buttonsOnList}`
        listPlayers.appendChild(newLine).innerHTML = player
        playersListArray.push(player)
    }

    function addPlayerToBox(player) {
        const boxOfPlayers = document.querySelector('.boxes')
        const newBox = document.createElement('div')
        newBox.style.backgroundColor = `#${getRandomColor()}`
        newBox.className = 'box'
        boxOfPlayers.appendChild(newBox).textContent = player
    }

    function getRandomColor() {
        randomColor = Math.ceil(Math.random() * (colors.length))
        return colors[randomColor]
    }


    editButton.onclick = function() {
        console.log('Editar jugador de la lista')
    }

    deleteButton.onclick = function() {
        console.log('Eliminar jugador de la lista')
    }

    playButton.onclick = function() {
        console.log('A JUGAR')
    }
}

app()