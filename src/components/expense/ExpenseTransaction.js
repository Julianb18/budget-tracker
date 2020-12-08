import React from "react";

export const ExpenseTransaction = ({ transaction }) => {
  return (
    <li className="transaction">
      <span className="transaction-text">{transaction.expenseText}</span>
      <span className="transaction-amount">€{transaction.expenseAmount}</span>
      <button className="delete-btn">
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
};
