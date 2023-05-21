var h1 = document.createElement("h1");
h1.innerHTML="Brewery data";
h1.style.textAlign="center";
h1.style.marginTop="60px";
h1.style.paddingBottom="20px"
h1.style.fontWeight="700"
document.body.append(h1);

var div=document.createElement("div");
div.style.textAlign="center";
var input =document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","country");
input.style.width="30%";
input.style.margin="10px"
input.setAttribute("placeholder"," search ");

var linebreak=document.createElement("br");
var button = document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-primary");
button.style.margin="10px";
button.innerHTML="Search";
button.addEventListener("click",bar);
var rediv=document.createElement("div");
rediv.setAttribute("id","timer");

var container =document.createElement("div");
container.className ="container";
var row = document.createElement("div");
row.className ="row";
container.append(row);

div.append(input,linebreak,button,rediv,container);
document.body.append(div);

async function bar(){

  try {
    let enemy =document.getElementById("country").value;
    let url = `https://api.openbrewerydb.org/breweries/${enemy}`
    let res1=await fetch (url);
    let res2= await res1.json(); 
      console.log(res2);
    for (let index = 0; index < res2.length; index++) {
      let element = res2[index].name;
      let type = res2[index].brewery_type;
      let address = res2[index].address_1;
      let website = res2[index].website_url;
      let phone = res2[index].phone;
      row.innerHTML+=`<div class="col-md-4">
      <div class="card border-primary mb-3" style="max-width: 18rem;">
      <div class="card-header"><b>Name:<b>${element}</div>
<div class="card-body text-primary">
  <h5 class="card-title">Type:${type}</h5>
  <h6 class="card-text">Address:${address}</h6>
  <p class="card-text">Url:${website}</p>
  <p class="card-text">Phone:${phone}</p>
</div>
</div>
</div>`
    }  
  } catch (error) {
    console.log(error);
    
  }
    
  
    }
   bar();
