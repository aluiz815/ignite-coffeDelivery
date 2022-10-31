import { Minus, Plus } from 'phosphor-react'
import { ProductActionButtonContainer } from './style'

export const ProductActionButton = () => {
  return (
    <ProductActionButtonContainer>
      <button>
        <Minus size={14} weight="bold" />
      </button>
      <span>1</span>
      <button>
        <Plus size={14} weight="bold" />
      </button>
    </ProductActionButtonContainer>
  )
}
