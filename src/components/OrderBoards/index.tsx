import { useState } from "react"
import { Order } from "../../types/Order"
import OrderModal from "../OrderModal"
import { Content, OrdersContainer } from "./styles"

interface Props {
    icon: string,
    title: string,
    orders: Order[]
}

function OrderBoards({ icon, title, orders }: Props) {
    const [open, setOpen] = useState(false)
    const [order, setOrder] = useState<Order | null>(null)

    function handleOpenModal() {
        setOpen(true)
    }

    function handleCloseModal() {
        setOpen(false)
    }

    return (
        <Content>
        <OrderModal open={open} order={order} onClose={handleCloseModal} />
            <header>
                <span>{icon}</span>
                <strong>{title}</strong>
                <span>({orders.length})</span>
            </header>
            {orders.length > 0 && (
                <OrdersContainer>
                    {orders.map(item => {
                        return (
                            <button key={item.id} onClick={() => {handleOpenModal(), setOrder(item)}}>
                                <p>Mesa {item.table}</p>
                                <span>{item.request.quantity.length} itens</span>
                            </button>
                        )
                    })}
                </OrdersContainer>
            )}
        </Content>
    )
}

export default OrderBoards