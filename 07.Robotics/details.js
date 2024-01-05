let card = document.querySelector(".card");

const BASE_URL = `http://localhost:3000`;

let id = new URLSearchParams(window.location.search).get("id");

async function getData(endPoint, id) {
  let res = await axios(`${BASE_URL}/${endPoint}/${id}`);
  card.innerHTML = `
  <div class="cardtop">
  <img src="${res.data.image}" alt="" />
</div>
<div class="cardbottom">
  <h2>${res.data.title}</h2>
  <p>Who are in extremely love with eco friendly system.</p>
  <div class="btn">
    <button>VIEW DETAILS</button>
  </div>
  <button onclick="goBack()">Go Back</button>
</div>
`;
}
getData("products", id);


function goBack() {
    window.history.back()
    console.log('salam');
}


