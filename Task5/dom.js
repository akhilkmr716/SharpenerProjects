// TRAVERSING THE DOM //
var itemList = document.querySelector('#items');
// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode);

// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement);

// childNodes -> Return text nodes as well
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// FirstChild -> Returns text nodes as well
// console.log(itemList.firstChild);
// firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = "Hello 1";

// lastChild -> Returns text nodes as well
// console.log(itemList.lastChild);
// lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = "Hello 4";

// nextSibling -> Returns text node as well
// console.log(itemList.nextSibling);
// nextElementSibling
// console.log(itemList.nextElementSibling);

// previousSibling -> Returns text node as well
// console.log(itemList.previousSibling);
// previousElementSibling 
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

// createElement

// Create a div
var newDiv = document.createElement('div');

// Add class
newDiv.className = "Hello";

// Add id
newDiv.id = "Hello1";

// Add attribute
newDiv.setAttribute('title', 'Hello Div');

// Create a text node
var newDivText = document.createTextNode('Hello World');

//Add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);
newDiv.style.fontSize = '30px'
container.insertBefore(newDiv, h1);

// Create a list node
var l1 = document.createElement('li');

// Add class
l1.className = "list-group-item";

//Create a text node
var l1Text = document.createTextNode('Hello World');

//Add text to list 
l1.appendChild(l1Text);

var uno = document.querySelector('ul');
var litems = document.querySelector('li');

uno.insertBefore(l1, litems);