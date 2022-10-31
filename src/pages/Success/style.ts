import styled from 'styled-components'

export const SuccessContainer = styled.div`
  margin-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`
export const SuccessContentWrapper = styled.div`
  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    line-height: 1.3;
    font-size: 2rem;
    color: ${(props) => props.theme['yellow-dark']};
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    line-height: 1.3;
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const SuccessContentDetails = styled.div`
  margin-top: 2.5rem;
  border: 1px solid transparent;
  border-radius: 6px 36px;
  background-image: linear-gradient(white, white),
    radial-gradient(circle at top left, #dbac2c, #8047f8);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  padding: 2.5rem;
  gap: 2.5rem;
  display: flex;
  flex-direction: column;
`
export const SuccessContentDetailsCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
`

interface IconWrapperProps {
  variant?: string
}

export const IconWrapper = styled.div<IconWrapperProps>`
  background: ${(props) => props.theme[props.variant]};
  border-radius: 50%;
  border: 0;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    color: ${(props) => props.theme.white};
  }
`

interface SuccessContentDetailsCardContentProps {
  isBold?: boolean
}

export const SuccessContentDetailsCardContent = styled.div<SuccessContentDetailsCardContentProps>`
  span {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    line-height: 1.3;
    font-size: 1rem;
    color: ${(props) => props.theme['base-text']};
    font-weight: ${(props) => (props.isBold ? 'bold' : '400')};
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    line-height: 1.3;
    font-size: 1rem;
    color: ${(props) => props.theme['base-text']};
  }
`
