import {
  CardCoffeeContainer,
  CoffeeCardContainer,
  CoffeeContentWrapper,
  ShoppingCartButton,
} from './style'

import { ShoppingCart } from 'phosphor-react'
import { ProductActionButton } from '../ProductActionButton'

import {CartContext, ProductProps} from '../../contexts/CartContext'
import { useContext } from 'react'

export const CoffeeCard = ({name,imageUrl,price,type,description,id,qty}:ProductProps) => {

  const { addProductToCart } = useContext(CartContext)


  function handleAddProductToCart() {
    const products = {name,imageUrl,price,type,description,id,qty}
    addProductToCart(products)
  }


  return (
    <CoffeeCardContainer>
      <img src={imageUrl} alt="" />
      <CoffeeContentWrapper>
        <p>{type}</p>
        <h3>{name}</h3>
        <span>{description}</span>
        <CardCoffeeContainer>
          <span>R$ {price}</span>
          <ProductActionButton id={id} qty={qty}/>
          <ShoppingCartButton onClick={handleAddProductToCart}>
            <ShoppingCart size={22} weight="fill" />
          </ShoppingCartButton>
        </CardCoffeeContainer>
      </CoffeeContentWrapper>
    </CoffeeCardContainer>
  )
}
