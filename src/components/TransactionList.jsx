import React from "react";
import TransactionItem from "./TransactionItem";

const ReceiptIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="empty-state-icon">
    <path d="M7 4.5h10a1.5 1.5 0 0 1 1.5 1.5v13.5l-2.5-1.5-2.5 1.5-2.5-1.5-2.5 1.5-2.5-1.5V6A1.5 1.5 0 0 1 7 4.5z" />
    <path d="M9 8h6M9 11h6M9 14h4" />
  </svg>
);

const TransactionList = ({ transactions, deleteTransaction }) => {
  if (transactions.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon" aria-hidden="true">
          <ReceiptIcon />
        </div>
        <h3>No transactions yet</h3>
        <p>Add your first transaction to get started!</p>
      </div>
    );
  }

  return (
    <div className="transaction-list">
      {transactions.map((transaction) => (
        <TransactionItem
          key={transaction.id}
          transaction={transaction}
          deleteTransaction={deleteTransaction}
        />
      ))}
    </div>
  );
};

export default TransactionList;