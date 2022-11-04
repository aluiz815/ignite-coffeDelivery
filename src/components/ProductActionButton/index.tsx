import { Minus, Plus } from 'phosphor-react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { ProductActionButtonContainer } from './style'


interface ProductActionButtonProps {
  id: string | undefined,
  qty:number
}

export const ProductActionButton = ({id,qty}:ProductActionButtonProps) => {

const {decreaseQuantityProductFromCart,increaseQuantityProductToCart} = useContext(CartContext)


  function handleDecreaseQuantityProductFromCart(){

    decreaseQuantityProductFromCart(String(id))

  }
  function handleIncreaseQuantityProductToCart(){


    increaseQuantityProductToCart(String(id))

  }

  return (
    <ProductActionButtonContainer>
      <button onClick={handleDecreaseQuantityProductFromCart}>
        <Minus size={14} weight="bold" />
      </button>
      <span>{qty}</span>
      <button onClick={handleIncreaseQuantityProductToCart}>
        <Plus size={14} weight="bold" />
      </button>
    </ProductActionButtonContainer>
  )
}
