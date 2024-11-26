const billAmount = document.getElementById("billAmount");
const customTipAmount = document.getElementById("customTipAmount");
const splitCount = document.getElementById("splitCount");

// const submitBtn = document.getElementById("")
const totalAmount = document.getElementById("totalAmount");
const tipAmount = document.getElementById("tipAmount");
const amountPerHead = document.getElementById("amountPerPerson");

function submit() {
  const bill = parseFloat(billAmount.value);
  const tip = parseFloat(customTipAmount.value);
  const numberOfPeople = splitCount.value;
  if (!bill || !tip || !numberOfPeople) {
    alert(`Some fields are empty`);
  } else {
    const totalBill = parseFloat(bill + tip);
    const amountPerPerson = parseFloat(totalBill / numberOfPeople);

    totalAmount.innerHTML = `The total amount is: ${totalBill}`;
    tipAmount.innerHTML = `Your tip is ${tip}`;
    amountPerHead.innerHTML = `Each person pays: ${amountPerPerson.toFixed(2)}`;
  }

  //   reset();
}

function reset() {
  billAmount.value = "";
  customTipAmount.value = "";
  splitCount.value = "";

  totalAmount.innerHTML = "";
  tipAmount.innerHTML = "";
  amountPerPerson.innerHTML = "";

  //   document.getElementById("billAmount").value = "";
  //   document.getElementById("customTipAmount").value = "";
  //   document.getElementById("splitCount").value = "";
}

function toggleDivVisibility() {
  const serviceRatingRadioButton = document.getElementById("serviceRating");
  const serviceRatingInputDiv = document.getElementById("serviceRatingInput");

  if (serviceRatingRadioButton.checked) {
    serviceRatingInputDiv.style.display = "block";
  } else {
    serviceRatingInputDiv.style.display = "none";
  }
}

