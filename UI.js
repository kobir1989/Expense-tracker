const totalAmount = document.getElementById("total-account");
const totalIncome = document.getElementById("total-income");
const totalExpense = document.getElementById("total-expense");
const historyPlus = document.getElementById("history-plus");
const historyMinus = document.getElementById("history-minus");
const form = document.getElementById("form");
const amount = document.getElementById("amount");
const text = document.getElementById("text");
const submitBtn = document.getElementById("submit-btn");
const containerSummary = document.querySelector(".container-summery");

////////////////////////////////////////////////////////////////////////////

// Display User input in UI
const renderInput = function (item) {
  const userText = item.text;
  const userAmount = item.amount;
  if (userAmount > 0) {
    const htmlPlus = `
     
       <div class="row row-summery-plus">
        <button class= "delete-btn">X</button>
       <div class= "col">Date</div>
        <div class= "col">${userText}</div>
       <div class= "col">${userAmount}</div>
     
      </div>
    `;

    containerSummary.insertAdjacentHTML("beforeend", htmlPlus);
  } else {
    const htmlMinus = `
   <div class="row row-summery-minus">
     <button class= "delete-btn">X</button>
       <div class= "col">Date</div>
        <div class= "col">${userText}</div>
       <div class= "col">${userAmount}</div>
      </div>
    `;

    containerSummary.insertAdjacentHTML("beforeend", htmlMinus);
  }
};

// Error Message
const error = function () {
  const errorMsg = `
  <div class="error"> Invalid Input!</div>
  `;
  containerSummary.innerHTML = errorMsg;
  setTimeout(() => {
    clearError();
  }, 2000);
};
const clearError = function () {
  const currentError = document.querySelector(".error");
  if (error) {
    currentError.remove();
  }
};
