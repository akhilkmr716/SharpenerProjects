// GETELEMENTSBYCLASSNAME //
var items = document.getElementsByClassName('list-group-item');

//Doesn't include "Item 5" as it doesn't have the same class name
console.log(items);

// Gives error
// items[4].textContent = "Hello 2";
// items[4].style.fontWeight = 'bold';
// items[4].style.backgroundColor = 'yellow';


// GETELEMENTSBYTAGNAME //
var li = document.getElementsByTagName('li');

//Includes "Item 5" Node as it belongs to the same tag "li"
console.log(li);


li[4].textContent = "Hello 2";
li[4].style.fontWeight = 'bold';
li[4].style.backgroundColor = 'yellow';

