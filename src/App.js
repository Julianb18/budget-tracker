import { Header } from "./components/Header";
import { Balance } from "./components/balance/Balance";
import { AddTransaction } from "./components/transactions/AddTransaction";
import { IncomeList } from "./components/income/IncomeList";
import { ExpenseList } from "./components/expense/ExpenseList";
import { GlobalContextProvider } from "./context/GlobalState";

import "./App.css";

function App() {
  return (
    <GlobalContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <Balance />
          <AddTransaction />
          <IncomeList />
          <ExpenseList />
        </div>
      </div>
    </GlobalContextProvider>
  );
}

export default App;
