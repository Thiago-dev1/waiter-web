import { useEffect, useState } from 'react'
import socketIo from 'socket.io-client'
// import { orders } from '../../mocks/orders'
import { api } from '../../services/api'
import { Order } from '../../types/Order'
import OrderBoards from '../OrderBoards'
import { Container } from './styles'

function Orders() {

    const [orders, setOrders] = useState<Order[]>([])
    

    // tirar somente o order que foi cancelado
    function handleCancelOrder(orderId: string) {
        setOrders((prevState) => prevState.filter(order => order.id !== orderId))
    }

    function handleOrderStatusChange(orderId: string, status: Order['status']) {
        setOrders((prevState) => prevState.map((order) => (
            order.id === orderId ? {  ...order, status } : order
        )))
    }

   async function getOrders() {
        const response = await api.get('orders')

        setOrders(response.data)
    }

    useEffect(() => {
        const socket = socketIo('http://localhost:3333', {
            transports: ['websocket']
        })

        socket.on('orders@new', (order) => {
            setOrders(prevState => prevState.concat(order))
        })
    }, [])

    useEffect(() => {
        getOrders()
    }, [])

    const waiting = orders.filter((i) => i.status == 'WAITING')
    const inProduction = orders.filter((i) => i.status == 'IN_PRODUCTION')
    const done = orders.filter((i) => i.status == 'DONE')

    return (
        <Container>
            <OrderBoards onOrderStatusChange={handleOrderStatusChange} onCancelOrder={handleCancelOrder} icon='🕑' title='Fila de espera'  orders={waiting}/>
            <OrderBoards onOrderStatusChange={handleOrderStatusChange}  onCancelOrder={handleCancelOrder} icon='👩‍🍳' title='Em produção' orders={inProduction}/>
            <OrderBoards onOrderStatusChange={handleOrderStatusChange}  onCancelOrder={handleCancelOrder} icon='✅' title='Pronto!' orders={done}/>
        </Container>
    )
}

export default Orders