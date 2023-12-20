let box = document.querySelector(".box");
let BASE_URL = `http://localhost:3000`;
const search = document.querySelector("#search");

async function getData(endPoint) {
  let response = await axios(`${BASE_URL}/${endPoint}`);
  console.log(response.data);
  data(response.data);
}
getData("blogs");



function data(array) {
  box.innerHTML = ""

  array.forEach(element => {
    box.innerHTML += `<div class="boxes">
        <h1>${element.title}</h1>
        <p>${element.body}<a href="details.html?id=${element.id}>Read More</a></p>
        <p>${element.author}</p>
        <button class="btn" onclick="deleteBtn(this,${element.id})">Delete</button>
        <a href="./form.html?id=${element.id}">Edit</a>
      </div>`
  });
}

async function deleteBtn(btn,id) {
  if (confirm("are you delete?")) {
    await axios.delete(`${BASE_URL}/blogs/${id}`);
  }
}

search.addEventListener("input", function (e) {
  let filtered = blogs.filter((item) =>
    item.title
      .toLocaleLowerCase()
      .includes(e.target.value.toLocaleLowerCase())
  );
  drawTable(filtered);
});
