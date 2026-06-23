const allBoxes = document.querySelectorAll('.box');

allBoxes.forEach(box => {
    box.addEventListener("mouseover", () => {
        box.classList.add('visible');
    });
     box.addEventListener("mouseout", () => {
        box.classList.remove('visible');
  });
});

let data = [];

function alertCart(button) {
    const productBox = button.closest('.box'); 
    const header = productBox.querySelector('h3').textContent; 
    alert(header + " successfully added to cart!");
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    cartItems.push(header);
    localStorage.setItem("cart", JSON.stringify(cartItems));
}


function redirect() {
    window.location.href = "../html/addedcart.html";
}
