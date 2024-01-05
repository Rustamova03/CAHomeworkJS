const BASE_URL = `http://localhost:3000`;
let card = document.querySelector(".card");

async function getData(endPoint) {
  let res = await axios(`${BASE_URL}/${endPoint}`);
  console.log(res.data);
  data(res.data);
}

getData("products");

function data(arr) {
  card.innerHTML = "";

  arr.forEach((element) => {
    card.innerHTML += `
      <div class="cardtop">
      <img src="${element.image}" alt="" />
    </div>
    <div class="cardbottom">
      <h2>${element.title}</h2>
      <p>Who are in extremely love with eco friendly system.</p>
<div>     <button onclick="deleteData(this,${element.id})">Delete</button></div>
      <div class="btn">
        <button>VIEW DETAILS</button>
    </div>
    </div> 

          `;
  });
}

async function deleteData(btn, id) {
  if (confirm("are you delete ??")) {
    await axios.delete(`${BASE_URL}/products/${id}`);
  }
}
