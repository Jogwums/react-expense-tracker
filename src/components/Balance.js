import React, {useContext} from 'react'
import styled, {css} from 'styled-components'

import { GlobalContext } from '../context/GlobalState'
import {Transaction} from './Transaction'


export const Balance = () => {
    const { transactions, addTransaction } = useContext(GlobalContext)

    const amounts = transactions.map((transaction) => transaction.amount);
    console.log(amounts);    
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)

    return (
        <Total>
            <h4>Balance</h4>
            <h2>{`\u20A6`}{total}</h2>
        </Total>
    )
}



const Total = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 50%;
    padding: 1rem;
    margin: 0 auto;
    border: 2px solid var(--red);

    ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}

`;