const dummytrans = [
  { date: "11/02/2022", text: "Food", amount: -500 },
  { date: "17/02/2022", text: "Salary2", amount: 2000 },
  { date: "17/02/2022", text: "Salary", amount: 10000 },
  { date: "21/02/2022", text: "Bills", amount: -2000 },
];

let transection = dummytrans;

//calc transections
const calcMoney = function () {
  const transections = transection.map((item) => item.amount);
  const totalBalance = transections
    .reduce((accu, item) => (accu += item), 0)
    .toFixed(2);

  const income = transections
    .filter((item) => item > 0)
    .reduce((accu, item) => (accu += item), 0)
    .toFixed(2);
  const expense = transections
    .filter((item) => item < 0)
    .reduce((accu, item) => (accu += item), 0)
    .toFixed(2);
  totalAmount.textContent = `${totalBalance}`;
  totalIncome.textContent = `${income}`;
  totalExpense.textContent = `${expense}`;
};
calcMoney();

// Submit BTN
const addNewTrans = function (e) {
  e.preventDefault();

  const inputText = text.value;
  const inputAmount = Number(amount.value);
  if (inputAmount > 0) {
    renderInputPlus(inputText, inputAmount);
  } else {
    renderInputMinus(inputText, inputAmount);
  }
};

form.addEventListener("submit", addNewTrans);
