const addButton = document.getElementById('add')
const editButton = document.getElementById('edit')
const deleteButton = document.getElementById('delete')
const playButton = document.getElementById('play')

let playersListArray = []


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
    buttonsOnList = '<button type="button" class="buttonlist" id="edit"><img src="./src/editButton.png"></button><button type="button" class="buttonlist" id="delete"><img src="./src/deleteButton.png"></button>'
    let listPlayers = document.getElementById('orderlist')
    player = player + buttonsOnList
    listPlayers.appendChild(document.createElement('li')).innerHTML = player
    playersListArray.push(player)
}

function addPlayerToBox(player) {
    const boxOfPlayers = document.querySelector('.boxes')
    const newBox = document.createElement('div')
    newBox.className = 'box'
    boxOfPlayers.appendChild(newBox).textContent = player
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