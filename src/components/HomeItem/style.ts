import styled from 'styled-components'

interface HomeItemContainerProps {
  bgVariant: string
}

export const HomeItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;

  span {
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    color: ${(props) => props.theme['base-text']};
    font-weight: 400;
  }
`

export const IconWrapper = styled.div<HomeItemContainerProps>`
  background: ${(props) => props.bgVariant && props.theme[props.bgVariant]};
  border-radius: 1000px;
  padding: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    color: ${(props) => props.theme.white};
  }
`
