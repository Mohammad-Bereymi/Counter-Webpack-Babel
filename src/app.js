import { counter, buttons } from "./dom-loader.js";

import "../src/main.css";
import "../src/style.css";

buttons.forEach((btn) => {
  btn.addEventListener("click", calculate);
});
let count = 0;

function calculate(event) {
  if (event.target.classList[1] == "decrement") {
    counter.innerHTML = --count;
  } else if (event.target.classList[1] == "reset") {
    count = 0;
    counter.innerHTML = count;
  } else if (event.target.classList[1] == "increment") {
    counter.innerHTML = ++count;
  }
  if (count < 0) {
    counter.style.color = "red";
  } else if (count > 0) {
    counter.style.color = "green";
  } else {
    counter.style.color = "black";
  }
}
