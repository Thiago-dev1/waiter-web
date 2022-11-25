
import Logo from '../../assets/images/logo.svg'

import { Container, Content } from './styles'


function Header() {
    return (
        <Container>
            <Content>
                <div className='page-details'>
                    <h1>Pedidos</h1>
                    <h2>Acompanhe os pedidos dos clientes</h2>
                </div>
                <div>
                    <img src={Logo} alt="WaiterApp" />
                </div>
            </Content>
        </Container>
    )
}

export default Header