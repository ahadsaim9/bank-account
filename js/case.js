document.getElementById("btn-case-plus").addEventListener("click", function () {
  const newCaseNumber = updateCaseNumber(true);
  updateCaseTotalPrice(newCaseNumber);

  setUpdatePrice();
});
document
  .getElementById("case-minus-btn")
  .addEventListener("click", function () {
    const newCaseNumber = updateCaseNumber(false);
    updateCaseTotalPrice(newCaseNumber);

    setUpdatePrice();
  });
