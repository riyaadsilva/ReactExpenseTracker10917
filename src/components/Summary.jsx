import React from "react";

const formatCurrency = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);

const IncomeIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="summary-svg-icon">
    <path d="M5 15.5 12.5 8l3 3L19 8.5" />
    <path d="M15 8.5h4v4" />
  </svg>
);

const BalanceIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="summary-svg-icon">
    <path d="M4 8.5A2.5 2.5 0 0 1 6.5 6h11A2.5 2.5 0 0 1 20 8.5v7A2.5 2.5 0 0 1 17.5 18h-11A2.5 2.5 0 0 1 4 15.5z" />
    <path d="M4 10.5h16" />
    <path d="M15.5 14h2.5" />
  </svg>
);

const ExpenseIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="summary-svg-icon">
    <path d="M5 8.5 12.5 16l3-3L19 15.5" />
    <path d="M15 15.5h4v-4" />
  </svg>
);

const Summary = ({ transactions }) => {
  const income = transactions
    .filter((item) => item.type === "Income")
    .reduce((acc, item) => acc + item.amount, 0);

  const expense = transactions
    .filter((item) => item.type === "Expense")
    .reduce((acc, item) => acc + item.amount, 0);

  const balance = income - expense;
  const incomeCount = transactions.filter((item) => item.type === "Income").length;
  const expenseCount = transactions.filter((item) => item.type === "Expense").length;

  const cards = [
    {
      label: "Total Income",
      value: income,
      tone: "income",
      icon: <IncomeIcon />,
      footer: `+ ${incomeCount} transaction${incomeCount === 1 ? "" : "s"}`,
    },
    {
      label: "Current Balance",
      value: balance,
      tone: "balance",
      icon: <BalanceIcon />,
      footer: balance >= 0 ? "Keep going!" : "Review budget",
    },
    {
      label: "Total Expense",
      value: expense,
      tone: "expense",
      icon: <ExpenseIcon />,
      footer: `+ ${expenseCount} transaction${expenseCount === 1 ? "" : "s"}`,
    },
  ];

  return (
    <div className="summary-grid">
      {cards.map((card) => (
        <div key={card.label} className={`summary-card ${card.tone}-card`}>
          <div className="summary-header">
            <div className={`summary-icon ${card.tone}-icon`} aria-hidden="true">
              {card.icon}
            </div>
            <span>{card.label}</span>
          </div>
          <div className={`summary-amount ${card.tone}-text`}>
            {formatCurrency(card.value)}
          </div>
          <div className={`summary-footer ${card.tone}-footer`}>{card.footer}</div>
        </div>
      ))}
    </div>
  );
};

export default Summary;