import React from 'react'
import './App.css';

import {Header, Balance, AddTransaction, TransactionList, IncomeExpenses} from './components/index'

import {GlobalProvider} from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <Header />
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
