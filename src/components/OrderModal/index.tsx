import { Dispatch, useEffect } from 'react'
import { Order } from '../../types/Order'
import { formatCurrency } from '../../utils/formatCurrency'
import { Container, Overlary } from './styles'


interface Props {
    open: boolean,
    order: Order,
    onClose: () => void,
    onAlterStatus: (idOrder: string, status: string, table: string) => Promise<void>,
    onCancelOrder: () => Promise<void>,
    isLoading: boolean
}

function OrderModal({ open, order, onClose, onAlterStatus, isLoading, onCancelOrder }: Props) {
    if (!open) {
        return null
    }

    // useEffect(() => {
    //     function handleKeyDown(event: KeyboardEvent) {
    //         if (event.code === 'Escape') {
    //             onClose()
    //         }
    //     }
    //     document.addEventListener('keydown', handleKeyDown)

    //     return () => {
    //         document.removeEventListener('keydown', handleKeyDown)
    //     }
    // }, [onClose])

    const total = order?.request?.reduce((acc, { product }, index) => {
        return acc + (product.price * order.request[index].quantity)
    }, 0) as number


    return (
        <Overlary onClick={onClose}>
            <Container onClick={e => e.stopPropagation()}>
                <header>
                    <h4>Mesa {order?.table}</h4>
                    <button type='button' onClick={onClose}>X</button>
                </header>
                <div className='status-container'>
                    <span>Status do Pedido</span>
                    <div>
                        {order?.status == "WAITING" && (
                            <>
                                <span>🕑</span>
                                <strong>Em Espera</strong>
                            </>
                        )}
                        {order?.status == "IN_PRODUCTION" && (
                            <>
                                <span>👩‍🍳</span>
                                <strong>Em produção</strong>
                            </>
                        )}
                        {order?.status == "DONE" && (
                            <>
                                <span>✅</span>
                                <strong>Pronto</strong>
                            </>
                        )}

                    </div>
                </div>
                <div className='itens'>
                    <p>itens</p>
                    {order.request?.map((item, index) => {
                        return (
                            <div key={index}>
                                <img className='image' src={item.product.imagePath} alt="produto" />
                                <div>
                                    <div>
                                        <p><span>{item.quantity}x</span> {item.product.name}</p>
                                        <span>{formatCurrency(item.product.price)}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
                <div className='total'>
                    <p>Total</p>
                    <strong>{formatCurrency(total)}</strong>
                </div>

                <div className='buttons'>
                    {order.status !== 'DONE' && (
                        <button onClick={() => [onAlterStatus(order.id, order.status, order.table)]} disabled={isLoading}>
                            <span>
                                {order?.status == 'WAITING' && ('👩‍🍳')}
                                {order?.status == 'IN_PRODUCTION' && ('✅')}
                                {/* {order?.status == 'DONE' && ('🍽')} */}
                            </span>
                            <p>
                                {order?.status == 'WAITING' && ('Iniciar Produção')}
                                {order?.status == 'IN_PRODUCTION' && ('Concluir Pedido')}
                                {/* {order?.status == 'DONE' && ('Pedido Entregue')} */}
                            </p>
                        </button>
                    )}
                    <button className='cancelButton' disabled={isLoading} onClick={onCancelOrder}>
                        <p>Cancelar Pedido</p>
                    </button>
                </div>
            </Container>
        </Overlary>
    )
}

export default OrderModal