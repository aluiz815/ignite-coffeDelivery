import Logo from '../../assets/logo.svg'
import {
  HeaderContainer,
  ActionsContainer,
  LocationContainer,
  CardContainer,
} from './style'
import { ShoppingCart, MapPin } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
export const Header = () => {

  const {cart} = useContext(CartContext)
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>
      <ActionsContainer>
        <LocationContainer>
          <MapPin size={22} weight="fill" />
          <span>Recife, PE</span>
        </LocationContainer>
        <CardContainer>
          <Link to="/checkout">
            <ShoppingCart size={22} weight="fill" />
            <span>{cart.length}</span>
          </Link>
        </CardContainer>
      </ActionsContainer>
    </HeaderContainer>
  )
}
