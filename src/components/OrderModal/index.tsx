import { Dispatch, useEffect } from 'react'
import { orders } from '../../mocks/orders'
import { Order } from '../../types/Order'
import { formatCurrency } from '../../utils/formatCurrency'
import { Container, Overlary } from './styles'

const frango = "data:image/jpeg;base64,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"

interface Props {
    open: boolean,
    order: Order | null,
    onClose: () => void
}

function OrderModal({ open, order, onClose }: Props) {
    if (!open) {
        return null
    }

    useEffect(() => {
        function handleKeyDown(event: KeyboardEvent) {
            if (event.key == 'Escape') {
                onClose()
            }
        }
        document.addEventListener('keydown', handleKeyDown)

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [onClose])

    const total = order?.request.products.reduce((acc, {product}, index) => {
        return acc + (product.price * order.request.quantity[index])
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
                    {order?.request.products.map((item, index) => {
                        return (
                            <div key={index}>
                                <img className='image' src={item.product.imagePath} alt="produto" />
                                <div>
                                    <div>
                                        <p><span>{order.request.quantity[index]}x</span> {item.product.name}</p>
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
                    <button>
                        <span>
                            {order?.status == 'WAITING' && ('👩‍🍳')}
                            {order?.status == 'IN_PRODUCTION' && ('✅')}
                            {order?.status == 'DONE' && ('🍽')}

                        </span>
                        <p>
                            {order?.status == 'WAITING' && ('Iniciar Produção')}
                            {order?.status == 'IN_PRODUCTION' && ('Concluir Pedido')}
                            {order?.status == 'DONE' && ('Pedido Entregue')}
                        </p>
                    </button>
                    <button>
                        <p>Cancelar Pedido</p>
                    </button>
                </div>
            </Container>
        </Overlary>
    )
}

export default OrderModal