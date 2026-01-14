function addToCart(product, qty) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const item = cart.find(i => i.id === product.id);

  if (item) item.quantity += qty;
  else cart.push({ ...product, quantity: qty });

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart");
}
