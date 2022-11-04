import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ActionsContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`
export const LocationContainer = styled.div`
  display: flex;
  gap: 0.25rem;
  justify-content: center;
  align-items: center;
  padding: 0.625rem 2.125rem;
  background: ${(props) => props.theme['purple-light']};
  border-radius: 6px;

  svg {
    color: ${(props) => props.theme.purple};
  }

  span {
    font-size: 0.875rem;
    font-family: 'Roboto', sans-serif;
    color: ${(props) => props.theme['purple-dark']};
  }
`
export const CardContainer = styled.div`
position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  background: ${(props) => props.theme['yellow-light']};
  border-radius: 6px;
  color: ${(props) => props.theme['yellow-dark']};
  cursor: pointer;

  a { 
    
    color:${(props) => props.theme['yellow-dark']};
    span {
      display: flex;
      justify-content: center;
      align-items: center;
      background: ${(props) => props.theme['yellow-dark']};
      color: ${(props) => props.theme.white};
      position: absolute;
      top: -10px;
      right: -10px;
      width: 1.25rem;
      height: 1.25rem;
      border-radius: 50%;
      border: 0;
    }
  }
`
