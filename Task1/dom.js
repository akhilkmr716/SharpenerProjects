/* // EXAMINE THE DOCUMENT OBJECT //
// console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.dir(document.title);
//document.title = "123";
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all); 
console.log(document.all[10]);
//document.all[10].textContent = "Hello";
console.log(document.forms);
console.log(document.links); */
// console.log(document.images);

// GETELEMENTBYID //
// console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = "Hello";
// headerTitle.innerText = "Goodbye";
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
headerTitle.style.borderBottom = 'solid 3px #000';
var header2 = document.getElementById('head');
header2.style.fontWeight = 'bold';
header2.style.color = 'green';









