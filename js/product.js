import { getQueryStringParam } from "./helpers/getQueryStringParam.js";
import { url } from "./constants.js";

async function getProduct() {
  const id = getQueryStringParam("id");

  if (!id) {
    document.location.href = "/";
  }

  const productUrl = `${url}/${id}`;

  try {
    const response = await fetch(productUrl);

    if (response.ok === false) {
      throw new Error("There was an error fetching the product with id: " + id);
    }

    console.log(response);

    const product = await response.json();
    console.log(product);

    const resultsContainer = document.querySelector("#container-product");

    resultsContainer.innerHTML = `<div class="card">
      <h1>${product.title}</h1>
      <p>Price: ${product.price}</p>
      <img src="${product.image}" alt="${product.description}" />
      <h2>Description: ${product.description}</h2>
      <p>Gender: ${product.gender}</p>
      <p>Color: ${product.baseColor}</p>
      </div>`;
  } catch (error) {
    console.log(error);
    const resultsContainer = document.querySelector("#container-product");
    resultsContainer.innerHTML = `<p class="error">${error}</p>`;
  }
}

getProduct();
// async function getProduct() {
//   const response = await fetch(url);
//   const product = await response.json();
//   // console.log(response);

//   const resultsContainer = document.querySelector("#container-product");

//   resultsContainer.innerHTML = "";

//   const firstProduct = product.slice(0, 1);
//   firstProduct.forEach(function (product) {
//     resultsContainer.innerHTML += `<div class="card" >
//       <h1>${product.title}</h1>
//       <p>Price:${product.price}</p>
//       <img src="${product.image}" alt="${product.description}" />
//       <h2>${product.description}</h2>
//     </div>`;
//   });
// }

// getProduct();
