import { ProductActionButton } from '../ProductActionButton'
import {
  CoffeeCardCheckoutContainer,
  CoffeeCardCheckoutDetails,
  CoffeeCardCheckoutDetailsAction,
  CoffeeCardCheckoutWrapper,
  Line,
  ProductActionButtonRemove,
} from './style'

import CoffeeImg from '../../assets/Capuccino.svg'
import { Trash } from 'phosphor-react'

export const CoffeeCardCheckout = () => {
  return (
    <CoffeeCardCheckoutContainer>
      <CoffeeCardCheckoutWrapper>
        <img src={CoffeeImg} alt="" />
        <CoffeeCardCheckoutDetails>
          <p>Expresso Tradicional</p>
          <CoffeeCardCheckoutDetailsAction>
            <ProductActionButton />
            <ProductActionButtonRemove>
              <Trash size={16} />
              <span>REMOVER</span>
            </ProductActionButtonRemove>
          </CoffeeCardCheckoutDetailsAction>
        </CoffeeCardCheckoutDetails>
        <p>R$ 9,90</p>
      </CoffeeCardCheckoutWrapper>
      <Line />
    </CoffeeCardCheckoutContainer>
  )
}
