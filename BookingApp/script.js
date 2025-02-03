const form_obj = document.getElementById("bookingform");
const ul = document.getElementById("ul_list");

const API_URL = "http://localhost:3000/user";

async function displayUsers() {
    try {
        const response = await axios.get(`${API_URL}/get-users`);
        const users = response.data;
        console.log(users);
        ul.innerHTML = "";

        users.forEach(user => {
            const li = document.createElement("li");
            li.innerHTML = `
                <h4>${user.name}-${user.emailid}</h4>
                <button type="button" class="btn-delete" data-id="${user.id}">Delete</button>
                <button type="button" class="btn-edit" data-id="${user.id}">Edit</button>
            `
            ul.appendChild(li);
        });
    } catch (error) {
        ul.innerHTML = `<h4>No Bookings have been made!!!!!</h4>`
        console.error("Error fetching appointment", error.message);
    }
}

document.addEventListener('DOMContentLoaded', displayUsers());

form_obj.addEventListener('submit', async (event) => {
    event.preventDefault();
    const name = event.target.querySelector("#username").value.trim();
    const phoneno = event.target.querySelector("#phoneno").value.trim();
    const emailid = event.target.querySelector("#email").value.trim();
    //console.log(phone);
    try {
        await axios.post(`${API_URL}/add-user`, { name, phoneno, emailid });
        form_obj.reset();
        displayUsers();
    } catch (error) {
        console.error("Error adding appointment", error);
    }
});

ul.addEventListener('click', async (event) => {
    const userId = event.target.dataset.id;

    if(event.target.classList.contains("btn-delete")) {
        try {
            await axios.delete(`${API_URL}/delete-user/${userId}`);
            displayUsers();
        } catch (error) {
            console.error("Error deleting appointment", error);
        }
    }

});

