import { HomeItem } from '../../components/HomeItem'
import {
  HomeHeader,
  HomeContainer,
  ItemsContainer,
  TitleContainer,
  HomeBody,
  HomeHeaderWrapper,
  CoffeeCardContainer,
} from './style'

import HomeCoffee from '../../assets/homeCoffee.svg'
import { CoffeeCard } from '../../components/CoffeeCard'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export const Home = () => {

  const { products } = useContext(CartContext)

  return (
    <HomeContainer>
      <HomeHeaderWrapper>
        <HomeHeader>
          <TitleContainer>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <span>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </span>
          </TitleContainer>
          <ItemsContainer>
            <HomeItem
              itemName="ShoppingCart"
              description="Compra simples e segura"
              itemBg="yellow-dark"
            />
            <HomeItem
              itemName="Package"
              description="Embalagem mantém o café intacto"
              itemBg="base-text"
            />
            <HomeItem
              itemName="Timer"
              description="Entrega rápida e rastreada"
              itemBg="yellow"
            />

            <HomeItem
              description="O café chega fresquinho até você"
              itemBg="purple"
            />
          </ItemsContainer>
        </HomeHeader>
        <img src={HomeCoffee} alt="Sweet and hot Coffee" />
      </HomeHeaderWrapper>
      <HomeBody>
        <h1>Nossos cafés</h1>
      </HomeBody>
      <CoffeeCardContainer>
        {products.map(product => {
          return (
            <CoffeeCard qty={product.qty} key={product.id} id={product.id} name={product.name} description={product.description} price={product.price} type={product.type} imageUrl={product.imageUrl} />
          )
        })}
      </CoffeeCardContainer>
    </HomeContainer>
  )
}
