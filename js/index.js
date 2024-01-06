const url = "https://api.noroff.dev/api/v1/rainy-days";

async function getProducts() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const products = await response.json();

    const resultsContainer = document.querySelector("#container-product");
    resultsContainer.innerHTML = "";

    const firstThreeProducts = products.slice(0, 3);
    firstThreeProducts.forEach(function (product) {
      resultsContainer.innerHTML += `<div class="card">
        <h1>${product.title}</h1>
        <p>Price: ${product.price}</p>
        <img src="${product.image}" alt="${product.description}" />
        <a href="product.html"?id=${product.id}>View details</a>
      </div>`;
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    // Optionally, update the UI to notify the user that an error has occurred
    const resultsContainer = document.querySelector("#container");
    resultsContainer.innerHTML = `<p>Failed to load products. Please try again later.</p>`;
  }
}

getProducts();
