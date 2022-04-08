var total = document.querySelector(".total-price");

var plusBtns = Array.from(document.querySelectorAll(".plus-btn"));
var minusBtns = Array.from(document.querySelectorAll(".minus-btn"));
var cards = document.querySelectorAll(".card");
var removeBtns = Array.from(document.querySelectorAll(".fa-trash-alt"));
var hearts = Array.from(document.querySelectorAll(".fa-heart"));

// function total price
function totalPrice() {
  var quantities = Array.from(document.querySelectorAll(".qute"));
  var unitPrices = Array.from(document.querySelectorAll(".unit-price"));
  let sum = 0;
  for (let i in quantities) {
    sum = sum + unitPrices[i].innerText * quantities[i].innerText;
  }
  total.innerText = sum;
}
// increment decrement
for (let i = 0; i < plusBtns.length; i++) {
  plusBtns[i].addEventListener("click", function () {
    plusBtns[i].nextElementSibling.innerText++;
    totalPrice();
  });
  minusBtns[i].addEventListener("click", function () {
    if (minusBtns[i].previousElementSibling.innerText > 0) {
      minusBtns[i].previousElementSibling.innerText--;
      totalPrice();
    }
  });
}

// change color heart
for (let heart of hearts) {
  heart.addEventListener("click", function () {
    if (heart.style.color !== "red") {
      heart.style.color = "red";
    } else {
      heart.style.color = "black";
    }
  });
}
// remove card
// for (let removeBtn of removeBtns) {
//   removeBtn.addEventListener("click", function () {
//     removeBtn.parentNode.parentNode.parentNode.remove();
//     totalPrice();
//   });
// }
for (let i in removeBtns) {
  removeBtns[i].addEventListener("click", function () {
    cards[i].remove();
    totalPrice();
  });
}
