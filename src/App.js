import React, { useState } from "react";
import "./App.css";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import Summary from "./components/Summary";

const WalletIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="brand-icon-svg">
    <path d="M3.5 7.5A2.5 2.5 0 0 1 6 5h11a2.5 2.5 0 0 1 2.5 2.5v9A2.5 2.5 0 0 1 17 19H6a2.5 2.5 0 0 1-2.5-2.5z" />
    <path d="M15.5 12h4.5v4.5h-4.5a2.5 2.5 0 1 1 0-5z" />
    <path d="M6 8.5h10.5" />
  </svg>
);

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="date-icon">
    <rect x="3.5" y="5.5" width="17" height="15" rx="2" />
    <path d="M8 3.5v4M16 3.5v4M3.5 9.5h17" />
  </svg>
);

const App = () => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions((prevTransactions) => [
      ...prevTransactions,
      { ...transaction, id: Date.now() },
    ]);
  };

  const deleteTransaction = (id) => {
    setTransactions((prevTransactions) =>
      prevTransactions.filter((item) => item.id !== id)
    );
  };

  const todayLabel = new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="app-shell">
      <div className="dashboard">
        <header className="topbar">
          <div className="brand-wrap">
            <div className="brand-icon" aria-hidden="true">
              <WalletIcon />
            </div>
            <div>
              <h1>Expense Tracker</h1>
              <p>Track your income and expenses easily</p>
            </div>
          </div>

          <div className="date-badge">
            <CalendarIcon />
            <span>{todayLabel}</span>
          </div>
        </header>

        <Summary transactions={transactions} />

        <section className="panel form-panel">
          <h2>Add a New Transaction</h2>
          <TransactionForm addTransaction={addTransaction} />
        </section>

        <section className="panel transactions-panel">
          <div className="section-header">
            <h2>Recent Transactions</h2>
          </div>
          <TransactionList
            transactions={transactions}
            deleteTransaction={deleteTransaction}
          />
        </section>
      </div>
    </div>
  );
};

export default App;