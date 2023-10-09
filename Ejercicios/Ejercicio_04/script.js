fetch("https://swapi.dev/api/planets/")
	.then((response) => response.json())
	.then((data) => {
		console.log(data);

		let planetContent = document.querySelector("#planet");

		data.results.forEach((planet) => {
			let option = document.createElement("option");

			option.textContent = planet.name;
			option.value = planet.url;
			planetContent.appendChild(option);
		});
	})
	.catch();

let btn = document.querySelector("#planet");
btn.addEventListener("change", plenetSelect);

function plenetSelect() {
	console.log(document.querySelector("#planet").value);
	fetch(document.querySelector("#planet").value)
		.then((response) => response.json())
		.then((data) => {
			/* console.log(data.residents); */
			data.residents.forEach((element) => {
				console.log(element);
				fetch().then().then().catch();
			});
		})
		.catch();
}
