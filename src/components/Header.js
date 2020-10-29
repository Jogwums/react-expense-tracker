import React from 'react'
import styled from 'styled-components'

export const Header = () => {
    return (
        <Title>
            <h2>Expense Tracker</h2>
        </Title>
    )
}

const Title = styled.div`
    display: flex;
    justify-content: center;
    
`;