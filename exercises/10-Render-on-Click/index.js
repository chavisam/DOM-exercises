let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	let myDiv = document.createElement('div');
	const string = myDiv.innerHTML;
	myDiv.innerHTML = 'Hello World';
	myDiv.style.backgroundColor = 'yellow';
	document.body.appendChild(myDiv);
	
});