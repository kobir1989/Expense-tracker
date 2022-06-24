let transection = [];

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
    const inputData = {
      date: creatDate(),
      text: text.value,
      amount: Number(amount.value),
    };
    transection.push(inputData);
    renderInput(inputData);
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

//Add Date to History
const creatDate = function () {
  const time = new Date().toString().split(" ").slice(4, 5);
  const today = new Date().toLocaleDateString();

  return `${today} (Time-${time[0]})`;
};

//Event Listeners
form.addEventListener("submit", addNewTrans);
containerSummary.addEventListener("click", deleteBtn);
