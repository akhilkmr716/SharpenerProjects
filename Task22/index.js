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
    newLi.innerHTML = myObj_deserialized.username + "-" + myObj_deserialized.email + "-" + myObj_deserialized.phone;
    list[0].appendChild(newLi);
}