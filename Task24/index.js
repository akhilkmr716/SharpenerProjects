const list = document.getElementsByTagName('ul');
function handleFormSubmit(e)
{
    e.preventDefault();
    let myObj = {
        username : document.getElementById('username').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value
    };
    let myObj_serialized = JSON.stringify(myObj);
    localStorage.setItem(document.getElementById('email').value, myObj_serialized);
    let myObj_deserialized = JSON.parse(localStorage.getItem(document.getElementById('email').value));
    let newLi = document.createElement('li');
    newLi.innerHTML = myObj_deserialized.username + "-" + myObj_deserialized.email + "-" + myObj_deserialized.phone + '<button class="delete-btn">Delete</button>' + '<button class="edit-btn">Edit</button>';
    list[0].appendChild(newLi);
}
list[0].addEventListener('click', function(event){
    if(event.target.classList.contains('delete-btn')){
        const DataToDelete = event.target.parentElement;
        let key = DataToDelete.firstChild.textContent.split('-')[1];
        localStorage.removeItem(key);
        list[0].removeChild(DataToDelete);
    };
});
list[0].addEventListener('click', function(event){
    if(event.target.classList.contains('edit-btn')){
        const DataToEdit = event.target.parentElement;
        let key = DataToEdit.firstChild.textContent.split('-')[1];
        document.getElementById('username').value = DataToEdit.firstChild.textContent.split('-')[0];
        document.getElementById('email').value = DataToEdit.firstChild.textContent.split('-')[1];
        document.getElementById('phone').value = DataToEdit.firstChild.textContent.split('-')[2];
        localStorage.removeItem(key);
        list[0].removeChild(DataToEdit);
    };
});