import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
import { cart, saveItem } from "./cart.js";
const today = dayjs();
const deliveryDay = today.add(3, "day");
const buyDay = today.format("dddd, D MMMM YYYY");
const dateString = deliveryDay.format("dddd / D / MMMM");
let abaElement = document.getElementById("aba");
let khqrElement = document.getElementById("khqr");
let payElement = document.getElementById("payment");
let finishElement = document.getElementById("finish-btn");
let msElement = document.getElementById("message");
document.querySelector(".js-aba").addEventListener("click", () => {
  document.querySelector(".js-pay-btn").innerHTML = `
        <a href="https://pay.ababank.com/NC8hYjPjUJG68fPA6"><button class="payment js-pay">Pay now</button></a>
    `;
  abaElement.style.backgroundColor = "gray";
  abaElement.style.border = ".5px solid #da5a0f";
  // payNow();
  khqrElement.style.backgroundColor = "";
  khqrElement.style.border = "";
});

document.querySelector(".js-khqr").addEventListener("click", () => {
  document.querySelector(".js-pay-btn").innerHTML = `
        <button class="payment js-pay" >Pay now</button>
    `;
  khqrElement.style.backgroundColor = "gray";
  khqrElement.style.border = ".5px solid #da5a0f";

  payNow();
  abaElement.style.backgroundColor = "";
  abaElement.style.border = "";
});
function payNow() {
  document.querySelector(".js-pay").addEventListener("click", () => {
    document.querySelector(".text-ms").innerHTML = `
    <div class="message-to-cus">
        <h2>Thanks you!!!</h2>
        <p>Please screenshot the receipt.</p>
        <p>We will contact you on <p class="ms-date">${dateString}</p></p>
    </div>
  `;
    payElement.style.top = "57%";
  });
}

let quantity = 0;
let totalPrice = 0;
cart.forEach((cartItem) => {
  quantity += cartItem.quantity;
  totalPrice += cartItem.quantity * cartItem.priceCents;
});
let price = totalPrice + 4.99;
let taxPrice = totalPrice * 0.08;
let orderTotal = price + taxPrice;
document.querySelector(".js-finish").addEventListener("click", () => {
  payElement.style.top = "-100%";
  msElement.style.left = "50%";
});
document.querySelector(".js-ok-btn").addEventListener("click", () => {
  msElement.style.left = "-50%";
  finishElement.style.top = "50%";
  document.querySelector(".receipt").innerHTML = `
        <div class="header-re">
            <img src="icon/semicolon-logo.png">
            <h1>Receipt</h1>
        </div>
        <div class="re-container">
            <div class="product">
                <p class="text">Date:</p>
                <p class="day">${buyDay}</p>
            </div>
            <div class="product-re js-item-receipt"> 
            </div>
            
            <div class="product">
                <p class="text">Item (x${quantity}):</p>
                <p class="price">$${totalPrice.toFixed(2)}</p>
            </div>
            <div class="product">
                <p class="text">Shipping & handling:</p>
                <p class="price">$4.99</p>
            </div>
            <div class="product">
                <p class="text">Total before tax:</p>
                <p class="price">$${price.toFixed(2)}</p>
            </div>
            <div class="product">
                <p class="text">Estimated tax (8%):</p>
                <p class="price">$${taxPrice.toFixed(2)}</p>
            </div>
            <div class="product">
                <p class="text">Delivery day:</p>
                <p class="day">${dateString}</p>
            </div>
            <div class="product total-order">
                <p class="order-price">Order total:</p>
                <p class="total-price-order">$${orderTotal.toFixed(2)}</p>
            </div>
        </div>
        <a href="home.html">
            <button class="done">Done</button>
        </a>
        
    `;

  let listCart = "";
  cart.forEach((cartItem) => {
    let nameProduct = cartItem.name;
    let priceProduct = cartItem.priceCents;
    let quantity = cartItem.quantity;
    listCart += `
            <div class="item-receipt">
                <p class="text">${nameProduct} (x${quantity})</p>
                <p class="price">$${(priceProduct * quantity).toFixed(2)}</p>
            </div>
        `;
  });
  document.querySelector(".js-item-receipt").innerHTML = listCart;
  cart.splice(0, cart.length);
  saveItem();
});
