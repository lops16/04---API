fetch("https://rickandmortyapi.com/api/character/")
	.then((response) => {
		return response.json();
	})
	.then((data) => {
		let characterContent = document.querySelector("#content");
		data.results.forEach((character) => {
			let div = document.createElement("div");
			let h1 = document.createElement("h1");
			let img = document.createElement("img");

			h1.textContent = character.name;
			img.src = character.image;
			div.appendChild(h1);
			div.appendChild(img);
			characterContent.appendChild(div);
		});

		/* let div = document.querySelector("#content");
		let h1 = document.createElement("h1");
		h1.textContent = results.name;
		div.appendChild(h1); */
	})
	.catch();
