import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;
  height: 100%;

  img {
    margin-top: -1.25rem;
  }
`
export const CoffeeContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  p {
    background: ${(props) => props.theme['yellow-light']};
    padding: 4px 8px;
    border-radius: 100px;
    font-family: 'Roboto', sans-serif;
    font-size: 0.625rem;
    color: ${(props) => props.theme['yellow-dark']};
    margin-top: 0.75rem;
    margin-bottom: 1rem;
  }

  h3 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
    font-weight: bold;
    color: ${(props) => props.theme['base-subtitle']};
  }

  span {
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    color: ${(props) => props.theme['base-label']};
    padding: 1.25rem;
    margin-bottom: 2rem;
    text-align: center;
  }
`
export const CardCoffeeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0px 0.875rem 0px 0.875rem;
  span {
    font-family: 'Roboto', sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    color: ${(props) => props.theme['base-text']};
    padding: 0px;
    margin-bottom: 0px;
    white-space: nowrap;
  }
  margin-bottom: 1.5rem;
`

export const ShoppingCartButton = styled.button`
  border: 0;
  background: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme.white};
  cursor: pointer;
  width: 2.375rem;
  height: 2.375rem;
  border-radius: 6px;
  padding: 0.5rem;
  transition: background 0.2s;
  &:hover {
    background: ${(props) => props.theme.purple};
  }
`
