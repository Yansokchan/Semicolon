export let cart = JSON.parse(localStorage.getItem("cart"));
const scrollwidth = document.getElementById("list-cart");

if (!cart) {
  cart = [
    {
      id: "a01",
      image: "product/xiaomi14.png",
      name: "Xiaomi 14",
      priceCents: 78900,
      quantity: 1,
    },
    {
      id: "a02",
      image: "product/case-ipX.png",
      name: "iPhone X Case",
      priceCents: 649,
      quantity: 1,
    },
  ];
}
export function addToCart(productId, productImage, productName, productPrice) {
  let matchingItem;
  cart.forEach((cartItem) => {
    if (cartItem.name === productName) {
      matchingItem = cartItem;
    }
  });
  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({
      id: productId,
      image: productImage,
      name: productName,
      priceCents: productPrice,
      quantity: 1,
    });
  }
  saveItem();
}
export function saveItem() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function showToCart() {
  let showToCart = "";
  cart.forEach((cartItem) => {
    showToCart += `
          <div class="item js-cart-item-${cartItem.id}">
              <img src="${cartItem.image}">
              <div class="content">
                  <div class="name">
                  ${cartItem.name}
                  </div>
                  <div class="price">
                  $${cartItem.priceCents}
                  </div>
              </div>
              <div class="delete-quantity">
                  <div class="quantity-item">
                      <button data-product-id="${cartItem.id}" class="js-dis-btn" >-</button>
                      <span class="value data-item-id-${cartItem.id}">
                      ${cartItem.quantity}
                      </span>
                      <button data-product-id="${cartItem.id}" class="js-in-btn">+</button>
                  </div>
                  <div class="js-delete" data-product-id="${cartItem.id}" title="Delete">
                      <img src="icon/delete-icon.png">
                  </div>
              </div>
          </div> 
      `;
  });

  //Hide scroll width in cart
  if (cart.length < 4) {
    scrollwidth.style.scrollbarWidth = "none";
  } else {
    scrollwidth.style.scrollbarWidth = "";
  }

  document.querySelector(".list-cart").innerHTML = showToCart;
  saveItem();

  calculateTotal(cart);
  // Dis quantity

  disQuantity();

  //Inc quantity

  inQuantity();

  // Delete Item from cart

  deleteItem();
}

function calculateTotal(cart) {
  let totalPrice = 0;
  cart.forEach((cartItem) => {
    totalPrice += cartItem.quantity * cartItem.priceCents;
  });

  document.querySelector(".js-total-price").innerHTML = `
        $${totalPrice.toFixed(2)} `;
}

function disQuantity() {
  document.querySelectorAll(".js-dis-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const productId = button.dataset.productId;
      let cartQuantity;
      cart.forEach((cartItem) => {
        if (productId === cartItem.id) {
          cartQuantity = cartItem;
        }
      });
      if (cartQuantity.quantity > 1) {
        cartQuantity.quantity -= 1;
        saveItem();
      }
      calculateTotal(cart);
      cart.forEach((cartItem) => {
        document.querySelector(`.data-item-id-${cartItem.id}`).innerHTML =
          cartItem.quantity;
      });
    });
  });
}

function inQuantity() {
  document.querySelectorAll(".js-in-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const productId = btn.dataset.productId;
      let cartQuantity;
      cart.forEach((cartItem) => {
        if (cartItem.id === productId) cartQuantity = cartItem;
      });
      cartQuantity.quantity += 1;
      saveItem();
      calculateTotal(cart);
      cart.forEach((cartItem) => {
        document.querySelector(`.data-item-id-${cartItem.id}`).innerHTML =
          cartItem.quantity;
      });
    });
  });
}

function deleteItem() {
  const backCart = document.getElementById("cart-item");
  document.querySelectorAll(".js-delete").forEach((button) => {
    button.addEventListener("click", () => {
      const productId = button.dataset.productId;
      const newCart = [];
      cart.forEach((cartItem) => {
        if (cartItem.id !== productId) {
          newCart.push(cartItem);
        }
      });
      cart = newCart;
      const cartItemContainer = document.querySelector(
        `.js-cart-item-${productId}`
      );
      cartItemContainer.remove();
      calculateTotal(cart);
      cartQuantity();
      if (cart.length < 4) {
        scrollwidth.style.scrollbarWidth = "none";
      } else {
        scrollwidth.style.scrollbarWidth = "";
      }
      if (cart.length === 0) {
        backCart.style.right = "-100%";
        document.querySelector(".list-cart").innerHTML = `
          <h1 class="empty">Empty</h1>
        `;
      }
      saveItem();
    });
  });
}

export function cartQuantity() {
  let quantity = 0;
  cart.forEach((cartItem) => {
    quantity += cartItem.quantity;
  });
  document.querySelector(".js-cart-quantity").innerHTML = quantity;
}
