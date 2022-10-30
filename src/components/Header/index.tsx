import Logo from '../../assets/logo.svg'
import {
  HeaderContainer,
  ActionsContainer,
  LocationContainer,
  CardContainer,
} from './style'
import { ShoppingCart, MapPin } from 'phosphor-react'
export const Header = () => {
  return (
    <HeaderContainer>
      <img src={Logo} alt="" />
      <ActionsContainer>
        <LocationContainer>
          <MapPin size={22} weight="fill" />
          <span>Recife, PE</span>
        </LocationContainer>
        <CardContainer>
          <ShoppingCart size={22} weight="fill" />
        </CardContainer>
      </ActionsContainer>
    </HeaderContainer>
  )
}
