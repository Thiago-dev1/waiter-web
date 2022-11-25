import { orders } from '../../mocks/orders'
import OrderBoards from '../OrderBoards'
import { Container } from './styles'

function Orders() {
    return (
        <Container>
            <OrderBoards icon='🕑' title='Fila de espera'  orders={orders.filter(i => i.status == 'WAITING')}/>
            <OrderBoards icon='👩‍🍳' title='Em produção' orders={orders.filter(i => i.status == 'IN_PRODUCTION')}/>
            <OrderBoards icon='✅' title='Pronto!' orders={orders.filter(i => i.status == 'DONE')}/>
        </Container>
    )
}

export default Orders