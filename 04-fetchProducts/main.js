let form = document.querySelector("form");
let product = document.querySelector(".products-div");
let input = document.querySelectorAll(".products-input");
let addBtn = document.querySelector(".addBtn");

const BASE_URL = `https://api.escuelajs.co/api/v1`;

fetch(`${BASE_URL}/products `)
  .then((response) => response.json())
  .then((data) => {
    drawCards(data);
    console.log(data);
  })
  .catch((err) => console.log(err));

function drawCards(arr) {
  product.innerHTML = "";
  arr.forEach((element) => {
    product.innerHTML += `<div class="product">
                    <div class="product-image">
                      <img src=" ${element.images}" style="width: 100%" alt="" />
                    </div>
                    <div class="product-heading">
                      <p class="title">${element.title}</p>
                      <p class="description">${element.description}</</p>
                      <span>${element.price}</</span>
                      <div><button class="deleteBtn" onclick=deleteBtn(this,${element.id})>Delete</button></div>
                    </div>
                  </div>`;
  });
}

function deleteBtn(btn, id) {
  if (confirm("card is delete")) {
    fetch(`${BASE_URL}/products/${id}`, {
      method: "DELETE",
    });
    btn.closest(".product").remove();
  }
}

addBtn.addEventListener("click", function (elem) {
  elem.preventDefault();
});

let obj = {
  title: input[0].value,
  price: input[1].value,
  description: input[2].value,
  images: input[3].value,
};

fetch(`${BASE_URL}/products`, {
  method: "POST",
  headers: {
    "Content-type": "application/json",
  },
  body: JSON.stringify(obj),
}).then(() => {
  fetch(`${BASE_URL}/products`)
    .then((response) => response.json())
    .then((data) => {
      drawCards(data);
      console.log(data);
    })
    .catch((err) => console.log(err));
});

input.forEach((item) => (item.value = ""));
