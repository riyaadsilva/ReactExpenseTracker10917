import React from "react";

const Summary = ({ transactions }) => {
  const income = transactions
    .filter((item) => item.type === "Income")
    .reduce((acc, item) => acc + item.amount, 0);

  const expense = transactions
    .filter((item) => item.type === "Expense")
    .reduce((acc, item) => acc + item.amount, 0);

  const balance = income - expense;

  return (
    <div className="summary">
      <h2>₹ {balance}</h2>
      <div className="summary-details">
        <div>
          <p>Income</p>
          <p className="income">+ ₹ {income}</p>
        </div>
        <div>
          <p>Expense</p>
          <p className="expense">- ₹ {expense}</p>
        </div>
      </div>
    </div>
  );
};

export default Summary;