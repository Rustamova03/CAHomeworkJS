const BASE_URL = " http://localhost:8080";
let pricingcards = document.querySelector(".pricingcards");
async function getData() {
  let result = await axios(`${BASE_URL}/products`);
  console.log(result.data);
  drawCards(result.data);
}
getData();
function drawCards(arr) {
  pricingcards.innerHTML = "";
  arr.forEach((element) => {
    pricingcards.innerHTML += `
    <div class="card ">
              <img src="${element.image}" alt="" />
              <h1>${element.title}</h1>
              <p>${element.price}</p>
            </div>
    `;
  });
}
