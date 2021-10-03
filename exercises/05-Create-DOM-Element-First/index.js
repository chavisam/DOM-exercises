// Your code here
let output = document.querySelector ('#myDiv')
let element = document.createElement('p');
element.innerHTML = 'Hello World';
element.style.backgroundColor = 'yellow'
output.appendChild(element);