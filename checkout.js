import { cart } from "./cart.js";
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
let quantity = 0;
let totalPrice = 0;
const today = dayjs();
const deliveryDay = today.add(3, "day");
const dateString = deliveryDay.format("dddd /D /MMMM");

let reItem = `
                <div class="delivery-date">
                    <h3>Delivery date:</h3>
                    <p>${dateString}</p>
                </div>
            `;
cart.forEach((cartItem) => {
  reItem += `
        <div class="re-item-info"  data-aos="fade-up">
            <img src="${cartItem.image}" alt="Item" />
            <div class="text-re-item">
                <div>
                    <p>Product name: </p>
                    <p class="name-color"> ${cartItem.name}</p>
                </div>
                <div>
                    <p>Price: </p>
                    <p class="price-color"> $${cartItem.priceCents}</p>
                </div>
                <div>
                    <p>Quantity: </p>
                    <p class="q-color"> ${cartItem.quantity}</p>
                </div>
            </div>
        </div>
    `;
});

document.querySelector(".re-item").innerHTML = reItem;

cart.forEach((cartItem) => {
  quantity += cartItem.quantity;
  totalPrice += cartItem.quantity * cartItem.priceCents;
});
let price = totalPrice + 4.99;
let taxPrice = totalPrice * 0.08;
let orderTotal = price + taxPrice;
document.querySelector(".all-item").innerHTML = `
    <div class="item-price">
        <p class="text">Item(${quantity}):</p>
        <p class="price-color">$${totalPrice.toFixed(2)}</p>
    </div>
    <div class="shipping">
        <p class="text">Shipping & handling:</p>
        <p class="price-color">$4.99</p>
    </div>
    <div class="total-before-tax">
        <p class="text">Total before tax:</p>
        <p class="price-color">$${price.toFixed(2)}</p>
    </div>
    <div class="tax">
        <p class="text">Estimated tax (8%):</p>
        <p class="price-color">$${taxPrice.toFixed(2)}</p>
    </div>
    <div class="date">
        <p class="text">Delivery day:</p>
        <p class="date-day">${dateString}</p>
    </div>
    <hr width="100%" color=" #DA5A0F"/>
    <div class="order-total">
        <p class="order-total-price">Order total:</p>
        <p class="order-total-price">$${orderTotal.toFixed(2)}</p>
    </div>
`;
