import {
  CardCoffeeContainer,
  CoffeeCardContainer,
  CoffeeContentWrapper,
  ShoppingCartButton,
} from './style'

import CoffeeImage from '../../assets/Capuccino.svg'
import { ShoppingCart } from 'phosphor-react'
import { ProductActionButton } from '../ProductActionButton'

export const CoffeeCard = () => {
  return (
    <CoffeeCardContainer>
      <img src={CoffeeImage} alt="" />
      <CoffeeContentWrapper>
        <p>TRADICIONAL</p>
        <h3>Expresso Tradicional</h3>
        <span>O tradicional café feito com água quente e grãos moídos</span>
        <CardCoffeeContainer>
          <span>R$ 9,90</span>
          <ProductActionButton />
          <ShoppingCartButton>
            <ShoppingCart size={22} weight="fill" />
          </ShoppingCartButton>
        </CardCoffeeContainer>
      </CoffeeContentWrapper>
    </CoffeeCardContainer>
  )
}
