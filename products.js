// import {homeProducts} from '../scripts/home.js';
export let products = JSON.parse(localStorage.getItem("products"));
products = [
  {
    id: "a01",
    image: "product/xiaomi14.png",
    name: "Xiaomi 14",
    priceCents: 78900,
    rating: {
      stars: 5,
      count: 57,
    },
  },
  {
    id: "a02",
    image: "product/case-ipX.png",
    name: "iPhone X Case",
    priceCents: 649,
    rating: {
      stars: 3.5,
      count: 87,
    },
  },
  {
    id: "a03",
    image: "product/camon30.webp",
    name: "Tecno Camon 30",
    priceCents: 31900,
    rating: {
      stars: 4.5,
      count: 41,
    },
  },
  {
    id: "a04",
    image: "product/headphone.png",
    name: "Beats wireless headphones",
    priceCents: 3199,
    rating: {
      stars: 4,
      count: 154,
    },
  },
  {
    id: "a05",
    image: "product/screen-ipXSmax.png",
    name: "iP Xs max Screen Projector",
    priceCents: 849,
    rating: {
      stars: 3.5,
      count: 93,
    },
  },
  {
    id: "a06",
    image: "product/magicpad.png",
    name: "Honor Magic Pad",
    priceCents: 38900,
    rating: {
      stars: 3.5,
      count: 46,
    },
  },
  {
    id: "a07",
    image: "product/helmet-cafe.png",
    name: "Cafe Racer Helmet",
    priceCents: 3499,
    rating: {
      stars: 4.5,
      count: 115,
    },
  },
  {
    id: "a08",
    image: "product/mi-a1.png",
    name: "Xiaomi Mi A1",
    priceCents: 5499,
    rating: {
      stars: 3.5,
      count: 105,
    },
  },
  {
    id: "a09",
    image: "product/mi-band2.png",
    name: "Xiaomi Mi Band2",
    priceCents: 3499,
    rating: {
      stars: 4,
      count: 96,
    },
  },
  {
    id: "a10",
    image: "product/xbog-360.png",
    name: "Xbog 360 Controller",
    priceCents: 2299,
    rating: {
      stars: 4.5,
      count: 175,
    },
  },
  {
    id: "a11",
    image: "product/headphone-jabra.png",
    name: "JABRA Headphone",
    priceCents: 2699,
    rating: {
      stars: 4,
      count: 72,
    },
  },
  {
    id: "a13",
    image: "product/ip13-valerie.png",
    name: "iP 13 Pro Max Valerie",
    priceCents: 10800,
    rating: {
      stars: 5,
      count: 6,
    },
  },
  {
    id: "a13",
    image: "product/xiaomi-charger.png",
    name: "Xiaomi Charger 10000mAh",
    priceCents: 999,
    rating: {
      stars: 4,
      count: 58,
    },
  },
  {
    id: "a14",
    image: "product/mouse.png",
    name: "Computer Mouse",
    priceCents: 899,
    rating: {
      stars: 3.5,
      count: 78,
    },
  },
  {
    id: "a15",
    image: "product/bagpack.png",
    name: "Camping Bagpack",
    priceCents: 2199,
    rating: {
      stars: 4,
      count: 84,
    },
  },
  {
    id: "a16",
    image: "product/pad6pro.webp",
    name: "Xiaomi Pad 6 Pro",
    priceCents: 48900,
    rating: {
      stars: 4.5,
      count: 78,
    },
  },
  {
    id: "a17",
    image: "product/sony-ps.png",
    name: "SONY PS",
    priceCents: 4999,
    rating: {
      stars: 4,
      count: 91,
    },
  },
  {
    id: "a18",
    image: "product/s24ultra.jpg",
    name: "Galaxy S24 Ultra",
    priceCents: 114900,
    rating: {
      stars: 4.5,
      count: 23,
    },
  },
  {
    id: "a19",
    image: "product/realistic-console.png",
    name: "Realistic Console",
    priceCents: 2199,
    rating: {
      stars: 4,
      count: 86,
    },
  },
  {
    id: "a20",
    image: "product/keyboard-gamming.png",
    name: "Gamming Keyboard",
    priceCents: 1899,
    rating: {
      stars: 4,
      count: 78,
    },
  },
  {
    id: "a21",
    image: "product/charger-lightning.png",
    name: "Lightning Charger",
    priceCents: 1299,
    rating: {
      stars: 4.5,
      count: 135,
    },
  },
  {
    id: "a22",
    image: "product/magic6pro.webp",
    name: "Honor Magic 6 Pro",
    priceCents: 44900,
    rating: {
      stars: 4,
      count: 65,
    },
  },
  {
    id: "a23",
    image: "product/helmet-airoh.png",
    name: "Airoh Motorcycle Helmet",
    priceCents: 4999,
    rating: {
      stars: 4,
      count: 39,
    },
  },
  {
    id: "a24",
    image: "product/pad6.png",
    name: "Xiaomi Pad 6",
    priceCents: 34900,
    rating: {
      stars: 4.5,
      count: 91,
    },
  },
  {
    id: "a25",
    image: "product/sony-ps3.png",
    name: "SONY PS3",
    priceCents: 6499,
    rating: {
      stars: 4,
      count: 65,
    },
  },
  {
    id: "a26",
    image: "product/redmipadpro.png",
    name: "Redmi Pad Pro",
    priceCents: 26900,
    rating: {
      stars: 5,
      count: 124,
    },
  },
  {
    id: "a27",
    image: "product/ps4.png",
    name: "PS4 Original",
    priceCents: 6499,
    rating: {
      stars: 4.5,
      count: 63,
    },
  },
  {
    id: "a28",
    image: "product/tabs9.webp",
    name: "Galaxy Tab S9",
    priceCents: 69900,
    rating: {
      stars: 4.5,
      count: 31,
    },
  },
  {
    id: "a29",
    image: "product/powerbank.png",
    name: "Power Bank",
    priceCents: 999,
    rating: {
      stars: 4,
      count: 56,
    },
  },
  {
    id: "a30",
    image: "product/zflip5.jpg",
    name: "Galaxy Z Flip 5",
    priceCents: 109900,
    rating: {
      stars: 4,
      count: 12,
    },
  },
];
