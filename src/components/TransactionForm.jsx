import React, { useState } from "react";

const TransactionForm = ({ addTransaction }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("Income");

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedDescription = description.trim();
    const numericAmount = Number(amount);

    if (!trimmedDescription || numericAmount <= 0) {
      alert("Enter valid details!");
      return;
    }

    addTransaction({
      description: trimmedDescription,
      amount: numericAmount,
      type,
    });

    setDescription("");
    setAmount("");
    setType("Income");
  };

  return (
    <form className="form-control" onSubmit={handleSubmit}>
      <div className="input-row">
        <label className="field-group">
          <span>Description</span>
          <input
            type="text"
            placeholder="e.g. Salary, Groceries"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            aria-label="Description"
          />
        </label>

        <label className="field-group">
          <span>₹ Amount</span>
          <input
            type="number"
            placeholder="0"
            min="1"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            aria-label="Amount"
          />
        </label>

        <label className="field-group">
          <span>Type</span>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            aria-label="Transaction type"
          >
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
        </label>
      </div>

      <button type="submit" className="primary-btn">
        + Add Transaction
      </button>
    </form>
  );
};

export default TransactionForm;