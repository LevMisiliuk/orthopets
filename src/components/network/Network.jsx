import React from 'react'
import styled from 'styled-components'

function Network() {
    return (
        <NewtworkContainer>
            <h1>На данный момент страница <span>"Моя сеть"</span> находится в разработке. Совсем скоро она заработает</h1>
        </NewtworkContainer>
    )
}

export default Network

const NewtworkContainer = styled.div`
    width: 100%;
    margin-top: 86px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
        color: var(--primary-pink)
    }

    img {
        /* width: 262px; */
        height: 262px;
        text-align: center;
    }
`