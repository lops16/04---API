let nombre = prompt("Nombre de pokemon");

//envía la petición a la API
fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
	// gestiona la respuesta de la API
	.then((response) => {
		console.log(response);
		return response.json();
	})
	// gestiona los datos de la respuesta de la API
	.then((response) => {
		document.querySelector("h1").textContent = response.name;
		document.querySelector("#front").src = response.sprites.front_default;
		document.querySelector("#back").src = response.sprites.back_default;
	})
	//gestiona los errores
	.catch();
