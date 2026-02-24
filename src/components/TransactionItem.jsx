import React from "react";

const TransactionItem = ({ transaction, deleteTransaction }) => {
  const { id, description, amount, type } = transaction;

  return (
    <div
      className={`transaction-item ${
        type === "Income" ? "income-bg" : "expense-bg"
      }`}
    >
      <span>
        {description} - ₹ {amount}
      </span>
      <button
        className="delete-btn"
        onClick={() => deleteTransaction(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default TransactionItem;