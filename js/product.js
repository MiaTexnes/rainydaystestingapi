const url = "https://api.noroff.dev/api/v1/rainy-days";

async function getProduct() {
  const response = await fetch(url);
  const product = await response.json();
  // console.log(response);

  const resultsContainer = document.querySelector("#container-product");

  resultsContainer.innerHTML = "";

  const firstProduct = product.slice(0, 1);
  firstProduct.forEach(function (product) {
    resultsContainer.innerHTML += `<div class="card" >
      <h1>${product.title}</h1>
      <p>Price:${product.price}</p>
      <img src="${product.image}" alt="${product.description}" />
      <h2>${product.description}</h2>
    </div>`;
  });
}

getProduct();
