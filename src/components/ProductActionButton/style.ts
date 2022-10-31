import styled from 'styled-components'

export const ProductActionButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.375rem;
  padding: 0.875rem;
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  gap: 0.5rem;

  span {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    margin-bottom: 0px;
    font-weight: 400;
    padding: 0.25rem;
    color: ${(props) => props.theme['base-title']};
  }

  button {
    border: 0;
    background: transparent;
    color: ${(props) => props.theme.purple};
    cursor: pointer;
    &:hover {
      background: transparent;
    }
  }
`
