fetch("https://randomuser.me/api/")
	.then((response) => {
		return response.json();
	})
	.then((data) => {
		let randomPerson = document.querySelector("#container");
		let pictureId = document.createElement("img");
		let nameId = document.createElement("h2");
		let email = document.createElement("p");
		let adress = document.createElement("p");
		let adress2 = document.createElement("p");

		pictureId.src = data.results[0].picture.large;
		nameId.textContent =
			data.results[0].name.title +
			", " +
			data.results[0].name.first +
			", " +
			data.results[0].name.last;

		email.textContent = data.results[0].email;

		adress.textContent =
			data.results[0].location.street.name +
			", " +
			data.results[0].location.street.number;

		adress2.textContent =
			data.results[0].location.city +
			", " +
			data.results[0].location.state +
			", " +
			data.results[0].location.country +
			", " +
			data.results[0].location.postcode;

		randomPerson.appendChild(pictureId);
		randomPerson.appendChild(nameId);
		randomPerson.appendChild(email);
		randomPerson.appendChild(adress);
		randomPerson.appendChild(adress2);

		console.log(data);
	})
	.catch();
