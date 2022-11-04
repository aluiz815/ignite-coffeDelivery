import styled from 'styled-components'

export const CheckoutWrapper = styled.div`
  margin-top: 2.5rem;
  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: bold;
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const CheckoutFormContainer = styled.div`
  margin-top: 1rem;
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
`
export const CheckoutFormTitle = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;

  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
`
export const CheckoutFormTitleTexts = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  line-height: 1.3;

  p {
    font-size: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
  }
`
export const CheckoutForm = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input {
    background: ${(props) => props.theme['base-input']};
    border: 0;
    padding: 0.875rem;
    border-radius: 4px;
    outline: none;

    &:first-child {
      width: 12.5rem;
    }
  }
`
export const StreetWrapper = styled.div`
  display: flex;
  gap: 0.875rem;
  input {
    &:first-child {
      width: 20%;
    }
    width: 80%;
  }
`
export const StateWrapper = styled.div`
  display: flex;
  gap: 0.875rem;
  input {
    &:first-child {
      width: 20%;
    }
    width: 70%;

    &:last-child {
      width: 10%;
    }
  }
`

export const CheckoutPaymentForm = styled.div`
  margin-top: 1rem;
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
`
export const CheckoutPaymentFormTitle = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;

  svg {
    color: ${(props) => props.theme.purple};
  }
`
export const CheckoutPaymentFormTitleTexts = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  line-height: 1.3;

  p {
    font-size: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
  }
`
export const CheckoutPaymentType = styled.div`
  display: flex;
  width: 100%;
  gap: 0.875rem;
  margin-top: 1.25rem;
`
export const CheckoutPaymentTypeWrapper = styled.button`
  display: flex;
  align-items: center;
  padding: 1rem;
  gap: 0.875rem;
  border: 0;
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  cursor: pointer;
  white-space: nowrap;
  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const CheckoutContainer = styled.form`
  display: flex;
  width: 100%;
  gap: 2rem;
  form {
    display: flex;
    gap: 2rem;
  }
`
export const CheckoutCard = styled.div`
  margin-top: 2.5rem;
  flex: 1;
  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: bold;
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const CheckoutCardContainer = styled.div`
  margin-top: 1rem;
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px 44px 6px 44px;
`
export const CheckoutCardDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;

  button {
    padding: 0.875rem 0.5rem;
    border: 0;
    border-radius: 6px;
    background: ${(props) => props.theme.yellow};
    color: ${(props) => props.theme.white};
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 0.875rem;
    line-height: 1.6;
    cursor: pointer;
  }
`

interface CheckoutCardDescriptionWrapperProps {
  lastChild?: boolean
}
export const CheckoutCardDescriptionWrapper = styled.div<CheckoutCardDescriptionWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Roboto', sans-serif;
  font-size: ${(props) => (props.lastChild ? '1.25rem' : '1rem')};
  line-height: 1.3;
  color: ${(props) =>
    props.lastChild ? props.theme['base-subtitle'] : props.theme['base-text']};
  font-weight: ${(props) => (props.lastChild ? 'bold' : '400')};
  p {
    font-size: ${(props) => (props.lastChild ? '1.25rem' : '0.875rem')};
  }
`
