import { toast } from 'react-toastify'
import { useState } from "react"
import { api } from "../../services/api"
import { Order } from "../../types/Order"
import OrderModal from "../OrderModal"
import { Content, OrdersContainer } from "./styles"

interface Props {
    icon: string,
    title: string,
    orders: Order[],
    onCancelOrder: (idOrder: string) => void,
    onOrderStatusChange: (idOrder: string, status: Order['status']) => void
}

function OrderBoards({ icon, title, orders, onCancelOrder, onOrderStatusChange }: Props) {

    const [open, setOpen] = useState(false)
    const [order, setOrder] = useState<Order>()
    const [isLoading, setIsLoading] = useState(false)

    function handleOpenModal() {
        setOpen(true)
    }

    function handleCloseModal() {
        setOpen(false)
    }

    // Uma forma para atualizar os status do pedido
    
    async function handleChangeOrderStatus() {
        setIsLoading(true)

        const status = order?.status === 'WAITING' ? 'IN_PRODUCTION' : 'DONE'

        await api.patch(`orders/status/${order?.id}`, {status})
        
        toast.success(`O pedido da mesa ${order?.table} teve o status alterado!`)
        onOrderStatusChange(order!.id, status)
        setIsLoading(false)
        handleCloseModal()
    }

    async function handleCancelOrder() {
        setIsLoading(true)
        
        await new Promise(resolve => setTimeout(resolve, 3000))
        await api.delete(`orders/${order?.id}`)

        toast.success(`O Pedido da mesa ${order?.table} foi cancelado!`)

        setIsLoading(false)
        onCancelOrder(order!.id)
        handleCloseModal()
    }

    return (
        <Content>
        <OrderModal onCancelOrder={handleCancelOrder} isLoading={isLoading} open={open} order={order as Order} onClose={handleCloseModal} onAlterStatus={handleChangeOrderStatus} />
            <header>
                <span>{icon}</span>
                <strong>{title}</strong>
                <span>({orders?.length})</span>
            </header>
            {orders?.length > 0 && (
                <OrdersContainer>
                    {orders.map(item => {
                        return (
                            <button key={item.id} onClick={() => {handleOpenModal(), setOrder(item)}}>
                                <p>Mesa {item.table}</p>
                                <span>{item.request.length} itens</span>
                            </button>
                        )
                    })}
                </OrdersContainer>
            )}
        </Content>
    )
}

export default OrderBoards