import styled from 'styled-components'


export const Overlary = styled.div`
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(4.5px);

    width: 100%;
    height: 100%;

    left: 0px;
    top: 0px;
    position: fixed;
`

export const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background-color: white;
    width: 480px;
    padding: 2rem;

    border-radius: 0.5rem;

    header {
        display: flex;
        justify-content: space-between;
        font-size: 1.2rem;

        button {
            background-color: transparent;
            border: none;
            font-weight: bold;

            :hover {
                color: red;
            }
        }
    }

    .status-container {
        margin-top: 2rem;
        span {
            font-size: 0.8rem;
        }

        div {
            margin: 0;
            margin-top: 0.5rem;
            display: flex;
            gap: 0.3rem;
            align-items: center;
        }
    }

    .itens {
        margin-top: 2rem;

       > p {
            opacity: 0.8;
            font-weight: 500;
            margin-bottom: 1rem;
        }

        div {
            display: flex;
            gap: 0.7rem;
            align-content: center;

            .image {
               width: 48px;
               height: 40px;

               border-radius: 0.4rem;
            }

            div {
                flex-direction: column;
                margin-top: 0;
                gap: 0;
                p {
                    font-weight: 500;
                    span {
                        font-weight: normal;
                    }
                }
            }
        }
    }

    .total {
        margin-top: 1.5rem;
        display: flex;
        justify-content: space-between;

        p {
            opacity: 0.8;
            font-weight: 500;
        }
    }

    .buttons {
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 100%;


        button {
            padding: 1rem;
            border-radius: 2.5rem; 
            background-color: transparent;
            border: none;
            color: red;
            font-weight: 600;

            :hover {
               background-color: rgba(204, 204, 204, 0.4);
           }
        }

        button:first-child {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;

           background-color: black;
           color: #fff;

           :hover {
                opacity: 0.8 ;
           }
        }


    }
    
`