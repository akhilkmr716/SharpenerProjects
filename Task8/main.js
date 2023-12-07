// // Local Storage
// localStorage.setItem('Name', 'Akhil');
// // console.log(localStorage.getItem('Name'));
// localStorage.removeItem('Name');

// // Session Storage
// sessionStorage.setItem('Name', 'Ankit');
// console.log(sessionStorage.getItem('Name'));
// sessionStorage.removeItem('Name');

// //Cookies
// // document.cookie = 'name=kyle';
// document.cookie = 'name=akhil; expires=' + new Date(9999, 0, 1).toUTCString();
// document.cookie = 'lastname=mishra; expires=' + new Date(9999, 0, 1).toUTCString();
// console.log(document.cookie);

var form = document.getElementById('my-form');
form.addEventListener('submit', storeItem);
function storeItem(e)
{
    e.preventDefault();
    var nameId = document.getElementById('name').value;
    var emailId = document.getElementById('email').value;
    localStorage.setItem('Name', nameId);
    localStorage.setItem('Email', emailId);
}


