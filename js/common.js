function updateCaseNumber(isIncreaseOrDecrement) {
  const caseNumberField = document.getElementById("case-number");
  const caseNumberString = caseNumberField.value;
  const previousCaseNumber = parseInt(caseNumberString);

  let newCaseNumber;
  if (isIncreaseOrDecrement == true) {
    newCaseNumber = previousCaseNumber + 1;
  } else {
    newCaseNumber = previousCaseNumber - 1;
  }
  caseNumberField.value = newCaseNumber;
  return newCaseNumber;
}
function updateCaseTotalPrice(newCaseNumberIs) {
  const caseTotalPrice = newCaseNumberIs * 59;
  const caseTotal = document.getElementById("case-total");
  caseTotal.innerText = caseTotalPrice;
}
function updatePhoneNumber(incrementOrDecrement) {
  const phoneNumberField = document.getElementById("phone-number");
  const phoneNumberFieldStringIs = phoneNumberField.value;
  const previousPhoneNumber = parseInt(phoneNumberFieldStringIs);

  let newPhoneNumber;
  if (incrementOrDecrement == true) {
    newPhoneNumber = previousPhoneNumber + 1;
  } else {
    newPhoneNumber = previousPhoneNumber - 1;
  }

  phoneNumberField.value = newPhoneNumber;
  return newPhoneNumber;
}

function updatePhoneTotalPrice(priceIs) {
  const phoneTotal = document.getElementById("phone-total");
  const phoneTotalPrice = priceIs * 1219;
  phoneTotal.innerText = phoneTotalPrice;
  return phoneTotalPrice;
}
function getTextElementValueById(totalPriceId) {
  const totalElement = document.getElementById(totalPriceId);
  const totalString = totalElement.innerText;
  const totalPrice = parseInt(totalString);
  return totalPrice;
}
function setElementValueById(elementId, value) {
  const subTotalElement = document.getElementById(elementId);
  subTotalElement.innerText = value;
}
function setUpdatePrice() {
  const PhoneTotalElement = getTextElementValueById("phone-total");
  const caseTotalElement = getTextElementValueById("case-total");

  const totalPrice = PhoneTotalElement + caseTotalElement;
  setElementValueById("sub-total", totalPrice);
  //   set Tax

  const taxAmountString = totalPrice * 0.1;
  const taxAmount = parseFloat(taxAmountString);
  const taxElement = document.getElementById("tax-total");
  taxElement.innerText = taxAmount.toFixed(1);

  const totalAmountPrice = totalPrice + taxAmount;
  const totalAmount = document.getElementById("total-price");
  totalAmount.innerText = totalAmountPrice;
}
