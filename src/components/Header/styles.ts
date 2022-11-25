import styled from 'styled-components'


export const Container = styled.header`
    background-color: #D73035;
    height: 220px;
    display: flex;
    justify-content: center ;
    align-items: center;
`

export const Content = styled.div`
    width: 100%;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    .page-details {
        h1 {
            font-size: 2rem;
            color: #FFFFFF;
            margin-bottom: 0.3rem;
        }
        h2 {
            font-size: 1rem;
            color: #FFFFFF;
        }
    }
`