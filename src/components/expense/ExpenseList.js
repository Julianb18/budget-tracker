import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { ExpenseTransaction } from "./ExpenseTransaction";

export const ExpenseList = () => {
  const { expenseTransactions } = useContext(GlobalContext);

  console.log(expenseTransactions);

  return (
    <div className="transactions transactions-expense">
      <h2>Transaction History</h2>
      <ul className="transaction-list">
        {expenseTransactions.map((transaction) => (
          <ExpenseTransaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};
