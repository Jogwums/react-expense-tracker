import React, {useState, useContext} from 'react'
import styled, {css} from 'styled-components'
import {GlobalContext} from '../context/GlobalState'

import {v4 as uuidv4} from 'uuid'

export const AddTransaction = () => {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)

    const { addTransaction } = useContext(GlobalContext)
    
    const handleSubmit = (event) => {
             event.preventDefault();

        const newTransaction = {
            id: uuidv4(),
            text,
            amount: +amount
        }
        
        addTransaction(newTransaction);
        setText('')
        setAmount(0)
    }
    return (
        <>
            
            <Form onSubmit={handleSubmit}>
                <h3 style={{borderBottom:"2px solid grey"}}>Add new transaction</h3>
                <Box>
                    <label htmlFor="text">Text</label>
                    <Input 
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        type="text" placeholder="Enter text..."/>
                </Box>
                <Box>
                    <label htmlFor="amount">Amount: Enter credit/debit here...
                    </label>
                    <Input 
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    type="text" placeholder="Enter credit/debit here..." />
                </Box>
                <Button primary type="submit">Add Transaction</Button> 
            </Form>

        </>
    )
}


const Form = styled.form`
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
    width: 80%;
    margin: 0 auto .5rem auto;
    padding: 0;
    text-align: justify;
    

`;
const Box = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: .25rem;
    width: 100%;
    font-size: 1rem;

    &h1, label{
        font-weight: bold;
    }
`;
const Input = styled.input`
    background: transparent;
    color: var(--white);
    border-radius: 10px;
    border: 2px solid palevioletred;
    padding: 0.5rem;
    &:focus{
        border: 2px solid white;
        outline: none;
    }
`
const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid var(--btnborder);
    color: rebeccapurple;
    margin: 0 auto;
    padding: 0.5rem 1rem;
    box-shadow: 2px 4px 6px rgba(255,255,255,0.3);
    cursor: pointer;

    ${props => props.primary && css`
    background: var(--btncolor);
    color: white;
  `}

`;