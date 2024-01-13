import { url } from "./constants.js";

async function getProducts() {
  try {
    const response = await fetch(url);

    if (response.ok !== true) {
      throw new Error(`HTTP Error! status: ${response.status}`);
    }

    const products = await response.json();

    // Filter products for gender "male"
    const maleProducts = products.filter(
      (product) => product.gender === "Male"
    );

    // Get the first three male products
    const threeMaleProducts = maleProducts.slice(0, 3);

    const resultsContainer = document.querySelector("#container-product");
    resultsContainer.innerHTML = "";

    // Iterate over the three male products and add them to the HTML
    threeMaleProducts.forEach(function (product) {
      resultsContainer.innerHTML += `<div class="card">
    <h1>${product.title}</h1>
    <p>Price: ${product.price}</p>
    <img src="${product.image}" alt="${product.description}" />
    <a class="viewDetails" href="product.html?id=${product.id}">View details</a>
  </div>`;
    });
  } catch (error) {
    console.error("Error fetching products:", error);

    const resultsContainer = document.querySelector("#container");
    resultsContainer.innerHTML = `<p>Failed to load products. Please try again later.</p>`;
  }
}

getProducts();
