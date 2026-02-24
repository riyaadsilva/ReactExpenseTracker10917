import React, { useState } from "react";
import "./App.css";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import Summary from "./components/Summary";

const App = () => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, { ...transaction, id: Date.now() }]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((item) => item.id !== id));
  };

  return (
    <div className="app-container">
      <h1>💰 Expense Tracker</h1>
      <Summary transactions={transactions} />
      <TransactionForm addTransaction={addTransaction} />
      <TransactionList
        transactions={transactions}
        deleteTransaction={deleteTransaction}
      />
    </div>
  );
};

export default App;