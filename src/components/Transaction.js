import React from 'react'
import {GlobalContext} from '../context/GlobalState'

import styled, {css} from 'styled-components'

export const Transaction = ({transaction}) => {
    const { deleteTransaction } = React.useContext(GlobalContext)

    const sign = transaction.amount < 0 ? '-' : '+';

    return (
        <ListItem className={transaction.amount < 0 ? 'minus' : 'add'}>
            {transaction.text} 
            <span >{sign}{`\u20A6`}{Math.abs(transaction.amount)}</span>
            <Button delete onClick={() => deleteTransaction(transaction.id)}>✖</Button> 
        </ListItem>
    )
}

const ListItem = styled.li`
    list-style: none;
    display: flex;
    padding: .5rem;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    box-shadow: 0px 4px 6px rgba(0,0,0,0.2);
    margin: .25em 0;
    position: relative;

    &:hover{
        Button{
            display: block;
        }
    }
    
`;

const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid red;
    color: red;
    margin: 0 1em;
    padding:0.25em;
    box-shadow: 2px 4px 6px rgba(255,255,255,0.3);
    cursor: pointer;
    display: none;

    ${props => props.delete && css`
    background: red;
    color: white;
    position: absolute;
    left: -2.7rem;
    top: 7px;
  `}

`;