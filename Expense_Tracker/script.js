const form = document.querySelector("#expense-details");
const un_list = document.getElementsByTagName("ul");

const API_URL = "http://localhost:3000/expense";

async function displayExpenses() {
    try {
        const response = await axios.get(`${API_URL}/get-expenses`);
        const expenses = response.data;
        un_list[0].innerHTML = "";

        expenses.forEach(expense => {
            const li = document.createElement("li");
            li.innerHTML = `
                <li class="list-group-item">
                ${expense.amount}-${expense.desc}-${expense.cat}<br>
                <button type="button" class="btn btn-primary btn-del" data-id="${expense.id}">Delete Expense</button>
                <button type="button" class="btn btn-primary btn-edit" data-id="${expense.id}">Edit Expense</button></li>
            `
            un_list[0].appendChild(li);
        });
    } catch (error) {
        un_list[0].innerHTML = `<h4>No Expense record found!!!</h4>`;
        console.error("Error fetching expense records", error.message);
    }
}

document.addEventListener('DOMContentLoaded', displayExpenses());

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const amount = event.target.querySelector("#amount").value.trim();
    const desc = event.target.querySelector("#desc").value.trim();
    const cat = event.target.querySelector("#cat").value.trim();
    try {
        await axios.post(`${API_URL}/add-expense`, { amount, desc, cat });
        form.reset();
        displayExpenses();
    } catch (error) {
        console.error("Error adding expense record!!", error);
    }
});

un_list[0].addEventListener('click', async (event) => {
    const expenseId = event.target.dataset.id;

    if(event.target.classList.contains("btn-del")) {
        try {
            await axios.delete(`${API_URL}/delete-expense/${expenseId}`);
            displayExpenses();
        } catch (error) {
            console.error("Error deleting expense record!!!!", error);
        }
    } else if (event.target.classList.contains("btn-edit")) {
        const newAmount = prompt("Enter new amount:");
        const newDesc = prompt("Enter new description:");
        const newCat = prompt("Enter new category:");

        try {
            await axios.put(`${API_URL}/edit-expense/${expenseId}`, { amount: newAmount, desc: newDesc, cat: newCat});
            displayExpenses();
        } catch (error) {
            console.error("Error updating expense reocord:", error);
            alert("Failed to update expense record.");
        }
    } 
});