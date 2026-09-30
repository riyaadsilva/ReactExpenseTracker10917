import React from "react";

const formatCurrency = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);

const TransactionItem = ({ transaction, deleteTransaction }) => {
  const { id, description, amount, type } = transaction;
  const isIncome = type === "Income";

  return (
    <div className={`transaction-item ${isIncome ? "income-item" : "expense-item"}`}>
      <div className="transaction-main">
        <div className={`type-badge ${isIncome ? "income-badge" : "expense-badge"}`}>
          {isIncome ? "Income" : "Expense"}
        </div>
        <div className="transaction-details">
          <p className="transaction-description">{description}</p>
          <span className="transaction-meta">
            {isIncome ? "Received" : "Spent"}
          </span>
        </div>
      </div>

      <div className="transaction-actions">
        <span className={`transaction-amount ${isIncome ? "income-text" : "expense-text"}`}>
          {isIncome ? "+" : "-"} {formatCurrency(amount)}
        </span>
        <button className="delete-btn" onClick={() => deleteTransaction(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TransactionItem;