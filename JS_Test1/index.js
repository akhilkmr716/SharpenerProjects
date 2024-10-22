const form_obj = document.getElementById("bookingform");
const ul = document.getElementById("ul_list");
const fil = document.getElementById("search");
let total = 0;
let showing = 0;

//Event Handler for submitting and posting the data to server

form_obj.addEventListener("submit",(e)=>{
    e.preventDefault();
    const li = document.createElement("li");
    const mov_obj = {
      title: e.target.title.value,
      desc: e.target.desc.value
    }
    li.innerHTML = `<h2>${mov_obj.title}:${mov_obj.desc}</h2><br><button type="button" class="btn-delete">Delete</button>`;
    ul.appendChild(li);
    axios.post("https://67169cd23fcb11b265d31f97.mockapi.io/api/notebook",mov_obj)
      .then(res=>console.log(res.data))
      .catch(err=>console.log(err)); 
    total++;
    showing++;
    display(total);
    display1(showing);
    form_obj.reset();
  });

//Event Handler for delete button

ul.addEventListener("click",function(e){
    if(e.target.classList.contains("btn-delete")){
      let li_node;
      li_node = e.target.parentNode;
      deleteData(li_node.childNodes[0].innerHTML.split(':')[0]);
      ul.removeChild(li_node);
      total--;
      showing--;
      display(total);
      display1(showing);
    }
});

//Event handler for filter functionality

fil.addEventListener("keyup",function(e){
    const entered = e.target.value.toLowerCase();
    const lists = document.getElementsByTagName("li");
    let count = 0;
    for(let i=0;i < lists.length;i++)
    {
      let mov_txt = lists[i].childNodes[0].innerHTML.split(':')[0];
      if(mov_txt.toLowerCase().indexOf(entered) === -1)
      {
        lists[i].style.display = "none";

      }
      else
      {
        lists[i].style.display = "list-item";
      }
    }
    for(let i=0;i< lists.length;i++)
    {
        if(lists[i].style.display == "list-item")
        {
            count++;
        }
    }
    display1(count);
  
});

//Loading the data from server after reloading the page

window.addEventListener("load",function(){
    displayData();
})

//Fetches and dispalys data from server 

async function displayData(){
    try{
      const data = axios.get('https://67169cd23fcb11b265d31f97.mockapi.io/api/notebook');
      const res = await data;
      for(x of res.data){
        const li = document.createElement("li");
        li.innerHTML = `<h2>${x.title}:${x.desc}</h2><br><button type="button" class="btn-delete">Delete</button>`;
        ul.appendChild(li);
        total++;
        showing++;
        display(total);
        display1(showing);
      }
    }
    catch(error){
      console.log("Endpoint has no data to display!!!!");
    }
}

//Asynchronous function to fetch the data from server specifically id to perform delete crud operation

async function deleteData(title){
    try{
      const data = axios.get('https://67169cd23fcb11b265d31f97.mockapi.io/api/notebook');
      const res = await data;
      let id;
      for(x of res.data){
        if(x.title == title){
          id=x.id;
          break;
        }
      }
      const data1 = axios.delete(`https://67169cd23fcb11b265d31f97.mockapi.io/api/notebook/${id}`);
  
    }
    catch(error){
      console.log(error);
    }
}

//Displaying the incremented total notes made

function display(tot){
    const p_total = document.getElementById("p_t");
    p_total.innerHTML=`Total Notes: ${tot}`;
}

//Displaying the total notes shown on screen

function display1(show){
    const p_total = document.getElementById("s_t");
    p_total.innerHTML=`Showing: ${show}`;
}