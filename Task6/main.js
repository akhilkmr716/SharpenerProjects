// Add edit button to pre-existing list items
var preli = document.querySelectorAll('li');
for(var i = 0; i < preli.length; i++)
{
    // Create edit button
    let editBtn = document.createElement('button');

    // Append text node
    editBtn.appendChild(document.createTextNode('Edit'));
   
    // Append button to li
    preli[i].appendChild(editBtn);
    console.log(1);
}

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');


// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);



// Add item
function addItem(e){
    e.preventDefault();

   // Get input value
   var newItem = document.getElementById('item').value;

   //Create new li element
   var li = document.createElement('li');
   //Add class
   li.className = 'list-group-item';
   // Add text node with input value
   li.appendChild(document.createTextNode(newItem.concat(" ")));

   // Create edit button
   let editBtn = document.createElement('button');

   // Append text node
   editBtn.appendChild(document.createTextNode('Edit'));
  
   // Append button to li
   li.appendChild(editBtn);

   //Create del button element
   var deleteBtn = document.createElement('button');

   //Add classes to del button
   deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
   // Append text node
   deleteBtn.appendChild(document.createTextNode('X'));
   
   // Append button to li
   li.appendChild(deleteBtn);

   // Append li to list
   itemList.appendChild(li);

}

// Remove item
function removeItem(e){
   if(e.target.classList.contains('delete')){
     if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
     }
   }
}
