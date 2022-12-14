import { Bank, CreditCard, MapPinLine, Money } from 'phosphor-react'
import { useContext } from 'react'
import { FormProvider, useForm  } from 'react-hook-form'
import { CoffeeCardCheckout } from '../../components/CoffeeCardCheckout'
import { CartContext } from '../../contexts/CartContext'
import { zodResolver } from '@hookform/resolvers/zod'
import {  useNavigate } from "react-router-dom";
import * as zod from 'zod'
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

const newOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1).max(60),
  street: zod.string().min(1).max(60),
  number: zod.string().min(1).max(60),
  complement: zod.string().optional(),
  bairro: zod.string().min(1).max(60),
  city: zod.string().min(1).max(60),
  uf: zod.string().min(1).max(60),
  creditType: zod.string().min(1).max(60),
})
type NewOrderFormData = zod.infer<typeof newOrderFormValidationSchema>


export const Checkout = () => {

  const {cart,total,createOrder} = useContext(CartContext)
  const navigate = useNavigate();
  const newOrderForm = useForm<NewOrderFormData>({
    resolver: zodResolver(newOrderFormValidationSchema)
  })
  
  const { handleSubmit, reset, register, setValue, watch} = newOrderForm


  function handleCreateNewCycle(data: NewOrderFormData) {
    createOrder(data)
    reset()
    navigate('/success')
  }

  const creditTypeSelected = watch('creditType')

  return (
    <CheckoutContainer onSubmit={handleSubmit(handleCreateNewCycle)}>
      <FormProvider {...newOrderForm}>
      <CheckoutWrapper>
        <h1>Complete seu pedido</h1>
        <CheckoutFormContainer>
          <CheckoutFormTitle>
            <MapPinLine size={22} />
            <CheckoutFormTitleTexts>
              <p>Endere??o de Entrega</p>
              <span>Informe o endere??o onde deseja receber seu pedido</span>
            </CheckoutFormTitleTexts>
          </CheckoutFormTitle>
          <CheckoutForm >
            <input type="text" placeholder="CEP" id="cep"  {...register('cep')} />
            <input type="text" placeholder="Rua" id="street"  {...register('street')} />
            <StreetWrapper>
              <input type="text" placeholder="N??mero" id="number"  {...register('number')}/>
              <input type="text" placeholder="Complemento" id="complement"  {...register('complement')}/>
            </StreetWrapper>
            <StateWrapper>
              <input type="text" placeholder="Bairro" id="bairro"   {...register('bairro')}/>
              <input type="text" placeholder="Cidade" id="city"  {...register('city')}/>
              <input type="text" placeholder="UF" id="uf"  {...register('uf')}/>
            </StateWrapper>
          </CheckoutForm>
        </CheckoutFormContainer>
        <CheckoutPaymentForm>
          <CheckoutPaymentFormTitle>
            <MapPinLine size={22} />
            <CheckoutPaymentFormTitleTexts>
              <p>Endere??o de Entrega</p>
              <span>Informe o endere??o onde deseja receber seu pedido</span>
            </CheckoutPaymentFormTitleTexts>
          </CheckoutPaymentFormTitle>
          <CheckoutPaymentType>
            <CheckoutPaymentTypeWrapper type='button' className={creditTypeSelected == 'CART??O DE CR??DITO' ? 'selected' : ''}   onClick={() => setValue('creditType', 'CART??O DE CR??DITO')}>
              <CreditCard size={16} />
              <p>CART??O DE CR??DITO</p>
            </CheckoutPaymentTypeWrapper>
            <CheckoutPaymentTypeWrapper type='button' className={creditTypeSelected == 'CART??O DE D??BITO' ? 'selected' : ''}   onClick={() => setValue('creditType', 'CART??O DE D??BITO')}>
              <Bank size={16} />
              <p>CART??O DE D??BITO</p>
            </CheckoutPaymentTypeWrapper>
            <CheckoutPaymentTypeWrapper type='button' className={creditTypeSelected == 'DINHEIRO' ? 'selected' : ''}  onClick={() => setValue('creditType', 'DINHEIRO')}>
              <Money size={16} />
              <p>DINHEIRO</p>
            </CheckoutPaymentTypeWrapper>
          </CheckoutPaymentType>
        </CheckoutPaymentForm>
      </CheckoutWrapper>
      
      <CheckoutCard>
        <h1>Caf??s selecionados</h1>
        <CheckoutCardContainer>
          {cart.map(product => {
            return (
              <CoffeeCardCheckout key={product.id} name={product.name} description={product.description} id={product.id} imageUrl={product.imageUrl} price={product.price} qty={product.qty} type={product.price} />
            )
          })}
          <CheckoutCardDescription>
            <CheckoutCardDescriptionWrapper>
              <p>Total de itens</p>
              <span>R$ {total}</span>
            </CheckoutCardDescriptionWrapper>
            <CheckoutCardDescriptionWrapper>
              <p>Entrega</p>
              <span>R$ 3,50</span>
            </CheckoutCardDescriptionWrapper>
            <CheckoutCardDescriptionWrapper lastChild>
              <p>Total</p>
              <span>R$ {total}</span>
            </CheckoutCardDescriptionWrapper>
            <button type="submit" >CONFIRMAR PEDIDO</button>
          </CheckoutCardDescription>
        </CheckoutCardContainer>
      </CheckoutCard>
      </FormProvider>
    </CheckoutContainer>
  )
}
