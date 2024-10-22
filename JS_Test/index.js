const form_obj = document.getElementById("bookingform");
const ul = document.getElementById("ul_list");
const fil = document.getElementById("findslot");
let total = 0;
const no_book = document.getElementById("no_book");

//Event Handler for submitting and posting the data to server

form_obj.addEventListener("submit",(e)=>{
  e.preventDefault();
  if(total == 0)
  {
    no_book.style.display = "none";
  }
  const li = document.createElement("li");
  const mov_obj = {
    username: e.target.username.value,
    seatno: e.target.seatno.value
  }
  li.innerHTML = `<h4>${mov_obj.username}-${mov_obj.seatno}</h4> <button type="button" class="btn-delete">Delete</button> <button type="button" class="btn-edit">Edit</button>`;
  ul.appendChild(li);
  axios.post("https://67169cd23fcb11b265d31f97.mockapi.io/api/moviedata",mov_obj)
    .then(res=>console.log(res.data))
    .catch(err=>console.log(err)); 
  total++;
  display(total);
  if(fil.value != "")
  {
    li.style.display = "none";
  }
  form_obj.reset();
});

//Event Handler for delete button

ul.addEventListener("click",function(e){
  if(e.target.classList.contains("btn-delete")){
    let li_node;
    li_node = e.target.parentNode;
    deleteData(li_node.childNodes[0].innerHTML.split('-')[1]);
    ul.removeChild(li_node);
    total--;
    display(total);
    if(total==0)
    {
      no_book.style.display = "block";
    }
  }
});

//Event Handler for Edit button

ul.addEventListener("click",function(e){
  if(e.target.classList.contains("btn-edit")){
    let li_node;
    li_node = e.target.parentNode;
    deleteData(li_node.childNodes[0].innerHTML.split('-')[1]);
    document.getElementById('username').value = li_node.childNodes[0].innerHTML.split('-')[0];
    document.getElementById('seatno').value = li_node.childNodes[0].innerHTML.split('-')[1];
    ul.removeChild(li_node);
    total--;
    display(total);
    if(total==0)
    {
      no_book.style.display = "block";
    }
  }
});

//Event handler for filter functionality

fil.addEventListener("keyup",function(e){
  const entered = e.target.value;
  const lists = document.getElementsByTagName("li");
  let count = 0;
  for(let i=0;i < lists.length;i++)
  {
    let mov_txt = lists[i].childNodes[0].innerHTML.split('-')[1];
    if(mov_txt.indexOf(entered) === -1)
    {
      lists[i].style.display = "none";
      count++;
      if(count == lists.length)
      {
        no_book.style.display = "block";
      }
    }
    else
    {
      no_book.style.display = "none";
      lists[i].style.display = "list-item";
    }
  }

})

//Loading the data from server after reloading the page
window.addEventListener("load",function(){
  displayData();
})

//Displaying the incremented total booked tickets

function display(tot){
  const p_total = document.getElementById("p_t");
  p_total.innerHTML=`Total Booked: ${tot}`;
}

//Asynchronous function to fetch the data from server specifically id to perform delete crud operation

async function deleteData(seatno){
  try{
    const data = axios.get('https://67169cd23fcb11b265d31f97.mockapi.io/api/moviedata');
    const res = await data;
    let id;
    for(x of res.data){
      if(x.seatno == seatno){
        id=x.id;
        break;
      }
    }
    const data1 = axios.delete(`https://67169cd23fcb11b265d31f97.mockapi.io/api/moviedata/${id}`);

  }
  catch(error){
    console.log(error);
  }
}

//Fetches and dispalys data from server 

async function displayData(){
  try{
    const data = axios.get('https://67169cd23fcb11b265d31f97.mockapi.io/api/moviedata');
    const res = await data;
    no_book.style.display = "none";
    for(x of res.data){
      const li = document.createElement("li");
      li.innerHTML = `<h4>${x.username}-${x.seatno}</h4> <button type="button" class="btn-delete">Delete</button> <button type="button" class="btn-edit">Edit</button>`;
      ul.appendChild(li);
      total++;
      display(total);
    }
  }
  catch(error){
    console.log("Endpoint has no data to display!!!!");
  }
}

