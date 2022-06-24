const dummyTrans = [
  { date: "date", text: "salary", amount: 10100 },
  { date: "date", text: "Food", amount: -100 },
  { date: "date", text: "Income", amount: 1100 },
  { date: "date", text: "Bills", amount: -100 },
];

let transection = dummyTrans;

//Calc transections
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
  totalAmount.textContent = `৳${totalBalance}`;
  totalIncome.textContent = `৳${income}`;
  totalExpense.textContent = `৳${Math.abs(expense)}`;
};
calcMoney();

// Submit Btn

const addNewTrans = function (e) {
  e.preventDefault();
  if (text.value === "" || amount.value === "") {
    error();
  } else {
    const inputObj = {
      date: "11/10/2022",
      text: text.value,
      amount: Number(amount.value),
    };
    dummyTrans.push(inputObj);
    renderInput(inputObj);
    console.log(inputObj);

    calcMoney();
  }
  text.value = "";
  amount.value = "";
};

//Delete Btn

const deleteBtn = function (e) {
  if (e.target.className === "delete-btn") {
    e.target.parentElement.remove();
  }
};

//Event Listeners
form.addEventListener("submit", addNewTrans);
containerSummary.addEventListener("click", deleteBtn);
