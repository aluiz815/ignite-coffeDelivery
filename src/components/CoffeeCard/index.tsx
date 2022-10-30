import {
  CardCoffeeContainer,
  CoffeeCardContainer,
  CoffeeContentWrapper,
  ProductActionContainer,
} from './style'

import CoffeeImage from '../../assets/Capuccino.svg'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'

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
          <ProductActionContainer>
            <button>
              <Minus size={14} weight="bold" />
            </button>
            <span>1</span>
            <button>
              <Plus size={14} weight="bold" />
            </button>
          </ProductActionContainer>
          <button>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </CardCoffeeContainer>
      </CoffeeContentWrapper>
    </CoffeeCardContainer>
  )
}
