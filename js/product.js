fetch("data/products.json")
  .then(r => r.json())
  .then(products => {
    const id = new URLSearchParams(location.search).get("id");
    const p = products.find(x => x.id === id);

    let qty = 1;

    document.getElementById("product").innerHTML = `
      <img src="${p.image}">
      <h1>${p.name}</h1>
      <p>${p.description}</p>
      <p>$${p.price}</p>

      <div class="qty">
        <button onclick="qty=Math.max(1,--qty);document.getElementById('q').textContent=qty">−</button>
        <span id="q">1</span>
        <button onclick="qty++;document.getElementById('q').textContent=qty">+</button>
      </div>

      <button onclick='addToCart(${JSON.stringify(p)}, qty)'>
        Add to Cart
      </button>
    `;
  });
