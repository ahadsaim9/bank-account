document
  .getElementById("phone-btn-plus")
  .addEventListener("click", function () {
    const newPhoneNumber = updatePhoneNumber(true);
    updatePhoneTotalPrice(newPhoneNumber);
    setUpdatePrice();
  });
document
  .getElementById("phone-btn-minus")
  .addEventListener("click", function () {
    const newPhoneNumber = updatePhoneNumber(false);
    updatePhoneTotalPrice(newPhoneNumber);
    setUpdatePrice();
  });
