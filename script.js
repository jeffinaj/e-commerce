let cart = 0;

function addToCart() {
  cart++;
  document.getElementById("cartMsg").innerText = "Cart: " + cart + " items";
}