import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'
import { HomeItemContainer, IconWrapper } from './style'

interface HomeItemProps {
  description: string
  itemName?: string
  itemBg: string
}

export const HomeItem = ({ description, itemBg, itemName }: HomeItemProps) => {
  return (
    <HomeItemContainer>
      {itemName === 'ShoppingCart' ? (
        <IconWrapper bgVariant={itemBg}>
          <ShoppingCart size={16} weight="fill" />
        </IconWrapper>
      ) : itemName === 'Timer' ? (
        <IconWrapper bgVariant={itemBg}>
          <Timer size={16} weight="fill" />
        </IconWrapper>
      ) : itemName === 'Package' ? (
        <IconWrapper bgVariant={itemBg}>
          <Package size={16} weight="fill" />
        </IconWrapper>
      ) : (
        <IconWrapper bgVariant={itemBg}>
          <Coffee size={16} weight="fill" />
        </IconWrapper>
      )}
      <span>{description}</span>
    </HomeItemContainer>
  )
}
