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
const renderInputPlus = function (text, amount) {
  const htmlPlus = `
       <div class="row row-summery-plus">
       <div class= "col">Date</div>
        <div class= "col">${text}</div>
       <div class= "col">${amount}</div>
      </div>
    `;

  containerSummary.insertAdjacentHTML("beforeend", htmlPlus);
};
const renderInputMinus = function (text, amount) {
  const htmlMinus = `
   <div class="row row-summery-minus">
       <div class= "col">Date</div>
        <div class= "col">${text}</div>
       <div class= "col">${amount}</div>
      </div>
    `;

  containerSummary.insertAdjacentHTML("beforeend", htmlMinus);
};
