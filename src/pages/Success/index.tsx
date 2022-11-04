import {
  IconWrapper,
  SuccessContainer,
  SuccessContentDetails,
  SuccessContentDetailsCard,
  SuccessContentDetailsCardContent,
  SuccessContentWrapper,
} from './style'

import SuccessImg from '../../assets/success.svg'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export const Success = () => {

  const {order} = useContext(CartContext)

  return (
    <SuccessContainer>
      <SuccessContentWrapper>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <SuccessContentDetails>
          <SuccessContentDetailsCard>
            <IconWrapper variant="purple">
              <MapPin size={16} weight="fill" />
            </IconWrapper>
            <SuccessContentDetailsCardContent isBold>
              <p>
                Entrega em <span>{order.street}, {order.number}</span>
              </p>
              <p>{order.city}, {order.uf}</p>
            </SuccessContentDetailsCardContent>
          </SuccessContentDetailsCard>
          <SuccessContentDetailsCard>
            <IconWrapper variant="yellow">
              <Timer size={16} weight="fill" />
            </IconWrapper>
            <SuccessContentDetailsCardContent isBold>
              <p>Previsão de entrega</p>
              <span>20 min - 30 min</span>
            </SuccessContentDetailsCardContent>
          </SuccessContentDetailsCard>
          <SuccessContentDetailsCard>
            <IconWrapper variant="yellow-dark">
              <CurrencyDollar size={16} weight="fill" />
            </IconWrapper>
            <SuccessContentDetailsCardContent isBold>
              <p>Pagamento na entrega</p>
              <span>{order.creditType}</span>
            </SuccessContentDetailsCardContent>
          </SuccessContentDetailsCard>
        </SuccessContentDetails>
      </SuccessContentWrapper>
      <img src={SuccessImg} alt="" />
    </SuccessContainer>
  )
}
