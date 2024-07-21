import { products } from "./products.js";
import { addToCart, showToCart, cartQuantity, cart, saveItem } from "./cart.js";

let homeMenu = document.getElementById("home");
let popularMenu = document.getElementById("popular");
let aboutMenu = document.getElementById("about");
let backMenu = document.getElementById("back");
let menu = document.getElementById("menu-bar");
let menuImg = document.getElementById("menu-icon");

// Click to showing menu

document.querySelector(".menu").addEventListener("click", () => {
  menuImg.style.transform = "rotate(360deg)";
  menu.style.left = "0";
});
document.querySelector(".back-menu").addEventListener("click", () => {
  menuImg.style.transform = "rotate(360deg)";
  menu.style.left = "-50%";
});

//Click to changing background color menu
document.querySelector(".home-menu").addEventListener("click", () => {
  seeMore();
  menu.style.left = "-50%";
  homeMenu.style.backgroundColor = "rgb(11, 247, 247)";
  popularMenu.style.backgroundColor = "";
  aboutMenu.style.backgroundColor = "";
});

document.querySelector(".popular-menu").addEventListener("click", () => {
  menu.style.left = "-50%";
  homeMenu.style.backgroundColor = "";
  aboutMenu.style.backgroundColor = "";
  const product = document.querySelectorAll(".product-container");
  document.querySelector(".hideBtn").innerHTML = ``;
  for (var i = 0; i < products.length; i++) {
    if (products[i].rating.count < 60) product[i].style.display = "none";
  }
  popularMenu.style.backgroundColor = "rgb(11, 247, 247)";
  menuImg.style.transform = "rotate(360deg)";
});

document.querySelector(".about-menu").addEventListener("click", () => {
  aboutMenu.style.backgroundColor = "rgb(11, 247, 247)";
  menuImg.style.transform = "rotate(360deg)";
  menu.style.left = "-50%";
  homeMenu.style.backgroundColor = "";
  popularMenu.style.backgroundColor = "";
});

function homeProducts() {
  let productHTML = "";
  products.forEach((product) => {
    productHTML += `
    <div class="product-container">
        <div class="product-image-container">
          <img title="${product.name}" src="${product.image}">
        </div>
        <h2 class="product-name-container">
            ${product.name}
        </h2>
        <div class="product-price">
            $${(product.priceCents / 100).toFixed(2)}
        </div>
        <div class="product-rating-container">
            <img class="rating-star" src="rating/rating-${
              product.rating.stars * 10
            }.png">
            <div class="product-count-rating">
                ${product.rating.count}
            </div>
        </div>
        <button data-product-id="${product.id}" data-product-price="${(
      product.priceCents / 100
    ).toFixed(2)}" data-product-name="${product.name}" data-product-image="${
      product.image
    }" class="add-to-cart-btn js-add-to-cart-btn product-${
      product.id
    }" title="Add to cart">Add to cart</button>
    </div>
    `;

    document.querySelector(".js-product-flex").innerHTML = productHTML;
  });
  seeMore();
}

homeProducts();
cartQuantity();

//search item

const searchBox = document.getElementById("js-search-bar");
searchBox.addEventListener("keyup", (e) => {
  document.querySelector(".hideBtn").innerHTML = ``;
  let searchName = e.target.value.toUpperCase();
  const storeItem = document.getElementById("js-product-flex");
  const product = document.querySelectorAll(".product-container");
  const pName = storeItem.getElementsByTagName("h2");
  for (var i = 1; i < pName.length; i++) {
    let match = product[i].getElementsByTagName("h2")[0];
    if (match) {
      let textValue = match.textContent || match.innerHTML;
      if (textValue.toUpperCase().indexOf(searchName) > -1) {
        product[i].style.display = "";
      } else {
        product[i].style.display = "none";
      }
    }
  }
});

document.querySelectorAll(".js-add-to-cart-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const productImage = button.dataset.productImage;
    const productName = button.dataset.productName;
    const productPrice = button.dataset.productPrice;
    const productId = button.dataset.productId;
    addToCart(productId, productImage, productName, productPrice);
    cartQuantity();
    saveItem();
    setTimeout(() => {
      document.querySelector(`.product-${productId}`).innerHTML = `✔ Added`;
    }, 100);
    setTimeout(() => {
      document.querySelector(`.product-${productId}`).innerHTML = `Add to cart`;
    }, 1000);
  });
});

// Click to show cart

let iconCart = document.querySelector(".js-cart-icon");
let cartEelement = document.getElementById("cart-item");

iconCart.addEventListener("click", () => {
  cartEelement.style.right = "0";
  showToCart();
  if (cart.length !== 0) {
    document.querySelector(".buttons").innerHTML = `
      <div class="close js-close-click" id="close">Close</div>
      <a class="checkout" href="checkout.html">Checkout</a>
    `;
  } else {
    document.querySelector(".list-cart").innerHTML = `
    <h1 class="empty">Empty</h1>
    `;
    document.querySelector(".buttons").innerHTML = `
      <div class="close js-close-click" id="close">Close</div>
      <button class="checkout-no-item">Checkout</button>
    `;
    document
      .querySelector(".checkout-no-item")
      .addEventListener("click", () => {
        alert("No item!");
        cartEelement.style.right = "-100%";
      });
  }
  document.querySelector(".close").addEventListener("click", () => {
    cartEelement.style.right = "-100%";
    cartQuantity();
  });
});

//             see more button

function seeMore() {
  const seemore = document.getElementById("seemore-btn");
  const product = document.querySelectorAll(".product-container");
  for (var i = 0; i < products.length; i++) {
    if (i <= 19) {
      product[i].style.display = "";
      seemore.classList.add("seemore-btn");
    } else {
      product[i].style.display = "none";
      // seemore.classList.remove("seemore-btn");
    }
  }
  document.querySelector(".seemore-btn").innerHTML = `
    <button class="btn-seemore">See more</button>
  `;

  document.querySelector(".btn-seemore").addEventListener("click", () => {
    for (var i = 0; i < products.length; i++) {
      product[i].style.display = "";
    }
    document.querySelector(".seemore-btn").innerHTML = ``;
  });
}
