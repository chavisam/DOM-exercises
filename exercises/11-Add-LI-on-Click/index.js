let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {

	let newLi = document.createElement('li');
	let text = document.createTextNode('New li chavi element');
	newLi.appendChild(text);
	let parent = document.querySelector('#myList');
	newLi.style.backgroundColor = 'blue';
	//aquí lo añadimos al final de la lista
	parent.appendChild(newLi);
	// aquí lo añadimos al principio de la lista
	//parent.insertBefore(newLi,parent.childNodes[0]);

});
