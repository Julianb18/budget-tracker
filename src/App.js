import { Header } from "./components/Header";
import { Balance } from "./components/balance/Balance";
import { AddTransaction } from "./components/addTransactions/AddTransaction";
import { IncomeList } from "./components/transactions/IncomeList";
import { ExpenseList } from "./components/transactions/ExpenseList";
import { GlobalContextProvider } from "./context/GlobalState";

import "./App.css";

function App() {
  return (
    <GlobalContextProvider>
      <div className="container">
        {/* <div className="app-wrapper"> */}
        {/* <Header /> */}
        <div className="balance-wrapper">
          <Balance />
        </div>
        <div className="transactions-wrapper">
          <AddTransaction />
          <div className="lists-wrapper">
            <IncomeList />
            <ExpenseList />
          </div>
        </div>
        {/* </div> */}
      </div>
    </GlobalContextProvider>
  );
}

export default App;
