fetch("data/products.json")
  .then(r => r.json())
  .then(products => {
    const params = new URLSearchParams(location.search);
    const collection = params.get("collection");
    const category = params.get("category");

    document.getElementById("pageTitle").textContent =
      `${collection} - ${category}`;

    const grid = document.getElementById("productGrid");

    products
      .filter(p => p.collection === collection && p.category === category)
      .forEach(p => {
        grid.innerHTML += `
          <div class="card">
            <a href="product.html?id=${p.id}">
              <img src="${p.image}">
              <h4>${p.name}</h4>
            </a>
            <p>$${p.price}</p>
          </div>
        `;
      });
  });
