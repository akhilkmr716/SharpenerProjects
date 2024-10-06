const form = document.querySelector("#expense-details")
const un_list = document.getElementsByTagName("ul");
let count = 0;
if(Object.keys(localStorage).length == 0)
{
    count = 1;
}
else
{
    count = Number(Object.keys(localStorage).sort(function(a,b){return a - b})[Object.keys(localStorage).length - 1]) + 1;
}
for(x of Object.keys(localStorage))
{
    const exp_str = JSON.parse(localStorage.getItem(x));
    un_list[0].innerHTML += `<li class="list-group-item">${exp_str.amount}-${exp_str.description}-${exp_str.category}<br><button type='button' class='btn btn-primary btn-del'>Delete Expense</button> <button type='button' class='btn btn-primary btn-edit'>Edit Expense</button></li>`;
}
form.addEventListener("submit", function(e){
    e.preventDefault();
    const exp_details = {
        amount : e.target.amount.value,
        description : e.target.desc.value,
        category: e.target.cat.value
    }
    const exp_str = JSON.stringify(exp_details);
    localStorage.setItem(count.toString(), exp_str);
    count++;
    un_list[0].innerHTML += `<li class="list-group-item">${exp_details.amount}-${exp_details.description}-${exp_details.category}<br><button type='button' class='btn btn-primary btn-del'>Delete Expense</button> <button type='button' class='btn btn-primary btn-edit'>Edit Expense</button></li>`;
    form.reset();
})
un_list[0].addEventListener("click", function(e){
    if(e.target.classList.contains("btn-del"))
    {
       const li_node = e.target.parentNode;
       let del_key = 0;
       for(x of  Object.keys(localStorage))
       {
            if(JSON.parse(localStorage.getItem(x)).description == li_node.childNodes[0].nodeValue.split('-')[1])
            {
                del_key = x;
                break;
            }
       }
       localStorage.removeItem(del_key);
       un_list[0].removeChild(li_node);
       count--;
       if(count == 0)
       {
            count = 1;
       }
       
    }
})
un_list[0].addEventListener("click", function(e){
    if(e.target.classList.contains("btn-edit"))
    {
       const li_node = e.target.parentNode;
       let edit_key = 0;
       for(x of  Object.keys(localStorage))
       {
            if(JSON.parse(localStorage.getItem(x)).description == li_node.childNodes[0].nodeValue.split('-')[1])
            {
                edit_key = x;
                break;
            }
       }
       document.getElementById('amount').value = li_node.childNodes[0].nodeValue.split('-')[0];
       document.getElementById('desc').value = li_node.childNodes[0].nodeValue.split('-')[1];
       document.getElementById('cat').value = li_node.childNodes[0].nodeValue.split('-')[2];
       //console.log(li_node.childNodes[0].nodeValue.split('-')[2]);
       un_list[0].removeChild(li_node);
       count = x;
       
    }
})
