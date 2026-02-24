import React, { useState } from "react";

const TransactionForm = ({ addTransaction }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("Income");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description || amount <= 0) {
      alert("Enter valid details!");
      return;
    }

    addTransaction({
      description,
      amount: Number(amount),
      type,
    });

    setDescription("");
    setAmount("");
    setType("Income");
  };

  return (
    <form className="form-control" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        min="1"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="Income">Income</option>
        <option value="Expense">Expense</option>
      </select>

      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;