import React from "react";

export const AddTransaction = () => {
  return (
    <div className="form-wrapper">
      <form>
        <div className="div input-group income">
          <input type="text" placeholder="Add Income..." autoComplete="off" />
          <input type="number" placeholder="Amount" autoComplete="off" />
          <input type="submit" value="submit" />
        </div>
      </form>
      <form>
        <div className="div input-group expense">
          <input type="text" placeholder="Add Expense..." autoComplete="off" />
          <input type="number" placeholder="Amount" autoComplete="off" />
          <input type="submit" value="submit" />
        </div>
      </form>
    </div>
  );
};
