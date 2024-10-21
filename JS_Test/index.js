const form_obj = document.getElementById("bookingform");
const ul = document.getElementById("ul_list");
const fil = document.getElementById("findslot");
console.log(fil)
let total = 0;
form_obj.addEventListener("submit",(e)=>{
  e.preventDefault();
  if(total == 0)
  {
    const no_book = document.getElementById("no_book");
    document.body.removeChild(no_book);
  }
  const li = document.createElement("li");
  const mov_obj = {
    username: e.target.username.value,
    seatno: e.target.seatno.value
  }
  li.id = total + 1;
  li.innerHTML = `<h4>${mov_obj.username}-${mov_obj.seatno}</h4> <button type="button" class="btn-delete">Delete</button> <button type="button" class="btn-edit">Edit</button>`;
  ul.appendChild(li);
  axios.post("https://67169cd23fcb11b265d31f97.mockapi.io/api/moviedata",mov_obj)
    .then(res=>console.log(res.data))
    .catch(err=>console.log(err));
  total++;
  display(total);
  form_obj.reset();
});

ul.addEventListener("click",function(e){
  if(e.target.classList.contains("btn-delete")){
    let li_node;
    li_node = e.target.parentNode;
    axios.delete(`https://67169cd23fcb11b265d31f97.mockapi.io/api/moviedata/${li_node.id}`)
      .then(res=>console.log(res.data))
      .catch(err=>console.log(err));
    ul.removeChild(li_node);
    total--;
    display(total);
    if(total==0)
    {
      const not = document.createElement('h1');
      not.innerHTML = "Nothing Present";
      document.body.appendChild(not);
    }
  }
});

ul.addEventListener("click",function(e){
  if(e.target.classList.contains("btn-edit")){
    let li_node;
    li_node = e.target.parentNode;
    console.log(li_node.childNodes[0].innerHTML);
    document.getElementById('username').value = li_node.childNodes[0].innerHTML.split('-')[0];
    document.getElementById('seatno').value = li_node.childNodes[0].innerHTML.split('-')[1];
    ul.removeChild(li_node);
    total--;
    display(total);
    if(total==0)
    {
      const not = document.createElement('h1');
      not.innerHTML = "Nothing Present";
      document.body.appendChild(not);
    }
  }
});
fil.addEventListener("keyup",function(e){
  const entered = e.target.value;
  const lists = document.getElementsByTagName("li");
  for(let i=0;i < lists.length;i++)
  {
    let mov_txt = lists[i].childNodes[0].innerHTML.split('-')[1];
    if(mov_txt.indexOf(entered) === -1)
    {
      lists[i].style.display = "none";
    }
    else
    {
      lists[i].style.display = "list-item";
    }
  }

})
function display(tot){
  const p_total = document.getElementById("p_t");
  p_total.innerHTML=`Total Booked: ${tot}`;
}

