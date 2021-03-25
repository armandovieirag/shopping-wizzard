import { myOrder } from "./buttonpage-demo.js";

/*
 * This functions shows and hides gift section
 * @ author:
 */
const checkbox = document.getElementById("check-gift");
checkbox.addEventListener("change", function () {
  // Get the divs to hide and show
  var giftMessageWrapper = document.querySelector(".wrp-gift-message");
  var giftFileWrapper = document.querySelector(".file-input");
  // If the checkbox is checked, display the divs
  if (this.checked == true) {
    giftMessageWrapper.style.visibility = "visible";
    giftFileWrapper.style.visibility = "visible";
  } else {
    giftMessageWrapper.style.visibility = "hidden";
    giftFileWrapper.style.visibility = "hidden";
  }
});

/*
 * This functions calculates shipping date
 * and returns an object:
 * First date: today + 24H
 * Second date: First date + 24H
 * @ author:
 */
function shippingDates() {
  const obj = {};
  // First date
  const date = new Date();
  date.setDate(date.getDate() + 1);
  obj.firstDate = date.toLocaleDateString();
  // second date
  date.setDate(date.getDate() + 1);
  obj.secondDate = date.toLocaleDateString();
  // third date
  date.setDate(date.getDate() + 1);
  obj.thirdDate = date.toLocaleDateString();
  // fourth date
  date.setDate(date.getDate() + 1);
  obj.fourthDate = date.toLocaleDateString();
  return obj;
}

/*
 * Here we update the div template
 * to display the shipping date
 * based on the shipment type
 * Premium: today + 24H
 * Extra: Premium + 24H
 * @ author:
 */
/* 
const bDate = temp.querySelector("b"); */
const shipTemplate = document.querySelector(".shiptemplate");
const bDate1 = document.getElementById("date1");
const bDate2 = document.getElementById("date2");
const radios = document.querySelectorAll('input[type=radio][name="type"]');
radios.forEach((radio) => radio.addEventListener("change", displayShippment));
function displayShippment() {
  if (document.formship.type.value === "extra") {
    bDate1.textContent = shippingDates().secondDate;
    bDate2.textContent = shippingDates().thirdDate;
    myOrder.shippingPrice = 4.99;
  } else if (document.formship.type.value === "premium") {
    bDate1.textContent = shippingDates().firstDate;
    bDate2.textContent = shippingDates().secondDate;
    myOrder.shippingPrice = 9.99;
  } else {
    // Free
    bDate1.textContent = shippingDates().thirdDate;
    bDate2.textContent = shippingDates().fourthDate;
    myOrder.shippingPrice = 0;
  }
  // show
  shipTemplate.classList.add("shipping-show");
  myOrder.shippingDate1 = bDate1.textContent;
  myOrder.shippingDate2 = bDate2.textContent;
}

/*
 * Here we check default shippement
 * waits for all elements loaded
 * and call displayShippment()
 * @ author:
 */
document.addEventListener("DOMContentLoaded", (event) => {
  displayShippment();
});
