import { Bank, CreditCard, MapPinLine, Money } from 'phosphor-react'
import { CoffeeCardCheckout } from '../../components/CoffeeCardCheckout'
import {
  CheckoutCard,
  CheckoutCardContainer,
  CheckoutCardDescription,
  CheckoutCardDescriptionWrapper,
  CheckoutContainer,
  CheckoutForm,
  CheckoutFormContainer,
  CheckoutFormTitle,
  CheckoutFormTitleTexts,
  CheckoutPaymentForm,
  CheckoutPaymentFormTitle,
  CheckoutPaymentFormTitleTexts,
  CheckoutPaymentType,
  CheckoutPaymentTypeWrapper,
  CheckoutWrapper,
  StateWrapper,
  StreetWrapper,
} from './style'

export const Checkout = () => {
  return (
    <CheckoutContainer>
      <CheckoutWrapper>
        <h1>Complete seu pedido</h1>
        <CheckoutFormContainer>
          <CheckoutFormTitle>
            <MapPinLine size={22} />
            <CheckoutFormTitleTexts>
              <p>Endereço de Entrega</p>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </CheckoutFormTitleTexts>
          </CheckoutFormTitle>
          <CheckoutForm>
            <input type="text" placeholder="CEP" />
            <input type="text" placeholder="Rua" />
            <StreetWrapper>
              <input type="text" placeholder="Número" />
              <input type="text" placeholder="Complemento" />
            </StreetWrapper>
            <StateWrapper>
              <input type="text" placeholder="Bairro" />
              <input type="text" placeholder="Cidade" />
              <input type="text" placeholder="UF" />
            </StateWrapper>
          </CheckoutForm>
        </CheckoutFormContainer>
        <CheckoutPaymentForm>
          <CheckoutPaymentFormTitle>
            <MapPinLine size={22} />
            <CheckoutPaymentFormTitleTexts>
              <p>Endereço de Entrega</p>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </CheckoutPaymentFormTitleTexts>
          </CheckoutPaymentFormTitle>
          <CheckoutPaymentType>
            <CheckoutPaymentTypeWrapper>
              <CreditCard size={16} />
              <p>CARTÃO DE CRÉDITO</p>
            </CheckoutPaymentTypeWrapper>
            <CheckoutPaymentTypeWrapper>
              <Bank size={16} />
              <p>CARTÃO DE DÉBITO</p>
            </CheckoutPaymentTypeWrapper>
            <CheckoutPaymentTypeWrapper>
              <Money size={16} />
              <p>DINHEIRO</p>
            </CheckoutPaymentTypeWrapper>
          </CheckoutPaymentType>
        </CheckoutPaymentForm>
      </CheckoutWrapper>
      <CheckoutCard>
        <h1>Cafés selecionados</h1>
        <CheckoutCardContainer>
          <CoffeeCardCheckout />
          <CoffeeCardCheckout />
          <CheckoutCardDescription>
            <CheckoutCardDescriptionWrapper>
              <p>Total de itens</p>
              <span>R$ 29,70</span>
            </CheckoutCardDescriptionWrapper>
            <CheckoutCardDescriptionWrapper>
              <p>Entrega</p>
              <span>R$ 3,50</span>
            </CheckoutCardDescriptionWrapper>
            <CheckoutCardDescriptionWrapper lastChild>
              <p>Total</p>
              <span>R$ 33,20</span>
            </CheckoutCardDescriptionWrapper>
            <button>CONFIRMAR PEDIDO</button>
          </CheckoutCardDescription>
        </CheckoutCardContainer>
      </CheckoutCard>
    </CheckoutContainer>
  )
}
