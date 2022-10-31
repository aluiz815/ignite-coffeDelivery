import styled from 'styled-components'

export const CoffeeCardCheckoutWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.25rem;
  padding: 0.25rem 0.5rem;
  img {
    width: 4rem;
    height: 4rem;
  }

  p {
    white-space: nowrap;
    font-size: 1.5rem;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    line-height: 1.3;
    color: ${(props) => props.theme['base-text']};
  }
`
export const CoffeeCardCheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const CoffeeCardCheckoutDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const CoffeeCardCheckoutDetailsAction = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const Line = styled.hr`
  width: 100%;
  border: 1px solid ${(props) => props.theme['base-button']};
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`

export const ProductActionButtonRemove = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.375rem;
  padding: 0.875rem;
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  border: 0;
  color: ${(props) => props.theme.purple};
  cursor: pointer;

  span {
    font-family: 'Roboto', sans-serif;
    font-size: 0.75rem;
    margin-bottom: 0px;
    font-weight: 400;
    padding: 0.25rem;
    line-height: 1.6;
    color: ${(props) => props.theme['base-text']};
  }
`
