function app() {
	const playerInput = document.getElementById("input");
	const addButton = document.getElementById("add");
	const playButton = document.getElementById("play");
	const listPlayers = document.getElementById("orderlist");
	const boxOfPlayers = document.querySelector(".boxes");
	const colorsArray = [
		"D93C51",
		"F6EB15",
		"4893D8",
		"A642AD",
		"4C6BDB",
		"186887",
		"DF3C54",
		"ED8EF7",
		"F6EB15",
		"F98323",
		"ED8EF7",
		"52ADA8",
		"E599B7",
		"D93C51",
		"906A31",
		"A642AD",
		"4893D8",
		"55DC80",
	];
	const startPlayers = ["Fran", "Bea", "Susana", "Mario", "Buda", "Max"];
	let playersListArray = [];

	startPlayers.map((element, index) => {
		addPlayersToArray(element, index);
	});

	//#############   Events   #############

	addButton.onclick = function () {
		const newPlayer = playerInput.value;
		const idPlayer = playerInput.id;
		if (newPlayer.trim() == "") {
			return;
		}
		if (isPlayerInList(newPlayer)) {
			alert("Ya existe ese nombre de usuario");
		} else {
			addPlayersToArray(newPlayer, idPlayer);
		}
		playerInput.value = "";
		playerInput.focus();
	};

	playButton.onclick = function () {
		if (playersListArray.length > 1) {
			const index = getRandomNumber(0, playersListArray.length);
			deletePlayer(index);
		} else {
			alert("Necesitas dos jugadores como mínimo");
		}
		if (playersListArray.length == 1) {
			playersListArray.map((element) => {
				alert(element + " - Eres el GANADOR");
			});
		}
	};

	document.getElementById("orderlist").addEventListener("click", (event) => {
		let buttonListClassName = event.target.className;
		const indexInArray = event.target.parentNode.id;
		buttonListClassName = buttonListClassName.split(" ");
		if (buttonListClassName[1] == "delete") {
			deletePlayer(indexInArray);
		}
		if (buttonListClassName[1] == "edit") {
			editPlayer(indexInArray);
		}
	});

	//############   Functions    ############

	function addPlayersToArray(player, index) {
		if (index < 0) {
			playersListArray.push(player);
		}
		if (!isNaN(index)) {
			playersListArray[index] = player;
			playerInput.id = "-1";
		}
		renderList(playersListArray);
		renderBox(playersListArray);
	}

	function editPlayer(indexInArray) {
		playerInput.value = playersListArray[indexInArray];
		playerInput.id = indexInArray;
	}

	function deletePlayer(posicion) {
		alert(playersListArray[posicion] + " - Ha sido eliminado");
		playersListArray.splice(posicion, 1);
		renderList(playersListArray);
		renderBox(playersListArray);
	}

	function renderList(arrayOfPlayers) {
		listPlayers.innerHTML = "";
		for (let index = arrayOfPlayers.length - 1; index >= 0; index--) {
			const buttonsOnList = `<div class="button-container" id="${index}"><div class="buttonlist edit"></div><div class="buttonlist delete"></div></div>`;
			const newLine = document.createElement("div");
			newLine.id = index;
			newLine.className = "boxlist";
			listPlayers.appendChild(
				newLine
			).innerHTML = `<p>${arrayOfPlayers[index]}</p>${buttonsOnList}`;
		}
	}

	function renderBox(arrayOfPlayers) {
		boxOfPlayers.innerHTML = "";
		for (let index = arrayOfPlayers.length - 1; index >= 0; index--) {
			const newBox = document.createElement("div");
			newBox.style.backgroundColor = `#${getRandomColor()}`;
			newBox.id = index;
			newBox.className = "box";
			boxOfPlayers.appendChild(newBox).textContent = arrayOfPlayers[index];
		}
	}

	function isPlayerInList(player) {
		return playersListArray.includes(player);
	}

	// ############   Random functions   ###########

	function getRandomColor() {
		randomColor = Math.ceil(Math.random() * colorsArray.length);
		return colorsArray[randomColor];
	}

	function getRandomNumber(min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	}
}

app();
