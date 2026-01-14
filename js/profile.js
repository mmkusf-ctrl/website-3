const orders = JSON.parse(localStorage.getItem("orders")) || [];
const div = document.getElementById("orders");

if (!orders.length) div.textContent = "No orders yet";

orders.forEach(o => {
  div.innerHTML += `<p>Order #${o.id} – $${o.total}</p>`;
});
