import { Account } from './features/account/Account';
import { PriceList } from './features/prices/PriceList';
import { AccountBalanceChart } from './features/chart/AccountBalanceChart';
import './App.css';

function App() {
  return (
    <div className="App">
        <PriceList />
        <Account />
        <AccountBalanceChart />
    </div>
  );
}

export default App;
