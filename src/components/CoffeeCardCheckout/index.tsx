import { ProductActionButton } from '../ProductActionButton'
import {
  CoffeeCardCheckoutContainer,
  CoffeeCardCheckoutDetails,
  CoffeeCardCheckoutDetailsAction,
  CoffeeCardCheckoutWrapper,
  Line,
  ProductActionButtonRemove,
} from './style'

import { Trash } from 'phosphor-react'
import { CartContext, ProductProps } from '../../contexts/CartContext'
import { useContext } from 'react'

export const CoffeeCardCheckout = ({name,imageUrl,price,type,description,id,qty}:ProductProps) => {

const { removeProductFromCart } = useContext(CartContext)


  function handleRemoveProductFromCart() {
    removeProductFromCart(String(id))
  }

  return (
    <CoffeeCardCheckoutContainer>
      <CoffeeCardCheckoutWrapper>
        <img src={imageUrl} alt="" />
        <CoffeeCardCheckoutDetails>
          <p>{name}</p>
          <CoffeeCardCheckoutDetailsAction>
            <ProductActionButton id={id} qty={qty} />
            <ProductActionButtonRemove onClick={handleRemoveProductFromCart}>
              <Trash size={16} />
              <span>REMOVER</span>
            </ProductActionButtonRemove>
          </CoffeeCardCheckoutDetailsAction>
        </CoffeeCardCheckoutDetails>
        <p>R$ {price}</p>
      </CoffeeCardCheckoutWrapper>
      <Line />
    </CoffeeCardCheckoutContainer>
  )
}
