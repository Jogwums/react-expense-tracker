import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
import {Transaction} from './Transaction'

import styled, {css} from 'styled-components'


export const TransactionList = () => {
    const {transactions} = useContext(GlobalContext)


    return (
        <Total>
            <h3>History</h3>
            <ul className="list">
               {transactions.map((transaction) => (
                   <Transaction key={transaction.id} transaction={transaction}/>
               ))}
                
            </ul> 
        </Total>
    )
}

const Total = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 0;
    flex-shrink: 1;
    padding: 0;
    margin: 0 auto;
    text-align: center;
    width: 80%;

    &h3, ul{
        margin: 0;
        padding: 0;
    }
    &h3{
        border-bottom: 2px solid gray;
    }
`;