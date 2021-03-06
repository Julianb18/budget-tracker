// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case "ADD_INCOME":
      return {
        ...state, //spread the state to avoid changing the entire state
        incomeTransactions: [action.payload, ...state.incomeTransactions], //action.payload holds a newly added income transaction
      };

    case "ADD_EXPENSE":
      return {
        ...state,
        expenseTransactions: [action.payload, ...state.expenseTransactions],
      };
    case "DELETE_TRANSACTION":
      return {
        ...state,
        incomeTransactions: state.incomeTransactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
        expenseTransactions: state.expenseTransactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
