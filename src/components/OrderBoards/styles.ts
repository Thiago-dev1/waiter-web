import styled from 'styled-components'

export const Content = styled.div`
    width: 100%;
    border: 1px solid rgba(204, 204, 204, 0.4);
    margin-top: 2.2rem;
    padding: 1rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 0.5rem;

    > header {
        display: flex;
        gap: 0.3rem;
        justify-content: center;
    }


`

export const OrdersContainer = styled.div`
        width: 100%;
        margin-top: 1.6rem;
        display: flex;
        flex-direction: column;
        
        button {
        background-color: transparent;
        border-radius: 0.5rem;
        border: 1px solid rgba(204, 204, 204, 0.4);
        align-items: center;

        & + button {
            margin-top: 1.6rem;
        }
        
        :hover {
            background-color: rgba(204, 204, 204, 0.4);
        }
    }
`