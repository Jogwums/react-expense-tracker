import React, {useContext} from 'react'
import styled, {css} from 'styled-components'
import {GlobalContext} from '../context/GlobalState'


export const IncomeExpenses = () => {
    const {transactions} = useContext(GlobalContext)

    const amounts = transactions.map(transaction => transaction.amount);
    const income = amounts
      .filter(item => item > 0)
      .reduce((acc, item) => (acc += item), 0)
      .toFixed(2)

    const expense = (
        amounts.filter(item => item < 0)
          .reduce((acc, item) => (acc +=item), 0) * -1
    ).toFixed(2);

    return (
        <Display primary className="inc-exp-container">
            <div style={{padding: "0", margin:"0",}}>
                <h4>Income</h4>
                <p className="money plus">+{`\u20A6`}{income}</p>
            </div>
            <div style={{borderLeft:"2px solid lightgrey", padding: "0 0 0 .8rem"}}>
                <h4>Expenses</h4>
                <p className="money debit">-{`\u20A6`}{expense}</p>
            </div>
        </Display>
    )
}


const Display = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 50%;
    padding: 1rem;
    margin: 0 auto;
    border: 2px solid var(--red);

    ${props => props.primary && css`
    background: transparent;
    box-shadow: 2px 4px 6px rgba(0,0,0,0.2);
  `}

`;