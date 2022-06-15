function app() {
    const addButton = document.getElementById('add')
    const playButton = document.getElementById('play')
    const listPlayers = document.getElementById('orderlist')
    const boxOfPlayers = document.querySelector('.boxes')
    const colors = ['D93C51', 'F6EB15', '4893D8', 'A642AD', '4C6BDB', '186887', 'DF3C54', 'ED8EF7', 'F6EB15', 'F98323', 'ED8EF7', '52ADA8', 'E599B7', 'D93C51', '906A31', 'A642AD', '4893D8', '55DC80']
    const startPlayers = ['Fran', 'Bea', 'Susana', 'Mario', 'Buda', 'Max']
    let playersListArray = []


    startPlayers.map(element => {
        addPlayersToArray(element)
    });

    addButton.onclick = function() {
        const player = document.getElementById('input')
        if (player.value.trim() !== '') {
            addPlayersToArray(player.value)
        }
        player.value = ''
        player.focus()
    }

    document.getElementById('orderlist').addEventListener('click', (event) => {
        console.log(event.target.className)
        console.log(event)
    })

    function addPlayersToArray(player) {
        playersListArray.push(player)
        renderList(playersListArray)
        renderBox(playersListArray)
    }

    function renderList(arrayOfPlayers) {
        listPlayers.innerHTML = ''
        arrayOfPlayers.map((element, index) => {
            buttonsOnList = `<div class="buttonlist edit"></div><div class="buttonlist delete"></div>`
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


    playButton.onclick = function() {
        console.log('A JUGAR')
    }
}

app()