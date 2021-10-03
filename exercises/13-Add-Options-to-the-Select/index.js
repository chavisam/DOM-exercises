window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
	let select = document.querySelector('#mySelect');
	for (let i = 0; i < countries.length; i++) {
		const element = countries[i];
		let newOption= document.createElement('option');
		newOption.value = element;
		newOption.innerHTML = element;
		select.appendChild(newOption)
	}
};



let select = document.querySelector('#mySelect');
select.addEventListener('change', function(){
	let country = document.querySelector('#mySelect').value	
	alert(country);
})