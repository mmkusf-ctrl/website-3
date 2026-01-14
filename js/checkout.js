const cart = JSON.parse(localStorage.getItem("cart")) || [];
let total = cart.reduce((s, i) => s + i.price * i.quantity, 0);
document.getElementById("summary").textContent = `Total: $${total}`;

function placeOrder() {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  orders.push({ id: Date.now(), cart, total });
  localStorage.setItem("orders", JSON.stringify(orders));
  localStorage.removeItem("cart");
  location.href = "profile.html";
}
