let btn = document.getElementById("btn");
let yearInput = localStorage.getItem("DateYear");
let monthInput = localStorage.getItem("dateMonth");
let dayInput = localStorage.getItem("dateDay");

function datePicker() {
	yearInput = document.getElementById("yearInp").value;
	localStorage.setItem("dateYear", yearInput);

	monthInput = document.getElementById("monthInp").value;
	localStorage.setItem("dateMonth", monthInput);

	dayInput = document.getElementById("dayInp").value;
	localStorage.setItem("dateDay", dayInput);

	const dateSelect = `${yearInput}-${monthInput}-${dayInput}`;

	const url = "https://api.nasa.gov/planetary/apod?";

	const api_key = "lM0e9awjNuzKxeOpU37eHEtOxHejUdGZqbpoctPL";

	const newURl = `${url}date=${dateSelect}&api_key=${api_key}`;

	fetch(newURl)
		.then((response) => {
			console.log(response);
			return response.json();
		})
		.then((data) => {
			document.getElementById("title").innerHTML = data.title;
			document.getElementById("date").innerHTML = data.date;
			document.getElementById("img").src = data.url;
			document.getElementById("info").innerHTML = data.explanation;
			console.log(data);
		})
		.catch();
}

btn.addEventListener("click", datePicker);
