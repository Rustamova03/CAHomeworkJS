let id = new URLSearchParams(window.location.search).get("id");
let BASE_URL = `http://localhost:3000`;
let allInput = document.querySelectorAll("input");
let textarea = document.querySelector("textarea");
let addBtn = document.querySelector(".addBtn");
let option = document.querySelector("select");
const form = document.querySelector("form");

async function getData(endPoint, id) {
  let response = await axios(`${BASE_URL}/${endPoint}/${id}`);
  updateData(response.data);
}
getData("blogs", id);

function updateData(data) {
  allInput.value = `${data.title}`;
  textarea.value = `${data.body}`;
}

async function formData() {
  let response = await axios(`${BASE_URL}/${id}`);
  // console.log(response.data);
  (allInput[0].value = response.data.title),
    (textarea.value = response.data.body),
    (option.value = response.data.author);
  console.log(option);
}

if (id) {
  formData();
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  // window.location="./home.html"

  let drawcard = {
    title: allInput[0].value,
    body: textarea.value,
    author: option.value,
  };
  if (!id) {
    if (allInput.value != "" && textarea.value != "") {
      axios.post(`${BASE_URL}`, drawcard);
    } else {
      window.alert("Please fill fields");
    }
  } else {
    axios.patch(`${BASE_URL}/${id}`, drawcard);
  }
  console.log(allInput);

  allInput.forEach((item) => {
    item.value = "";
  });
  textarea.forEach((item) => {
    item.value = "";
  });
  option.forEach((item) => {
    item.value = "";
  });
});
