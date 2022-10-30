import styled from 'styled-components'

export const HomeContainer = styled.main`
  margin-top: 5.875rem;
`
export const HomeHeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 6.75rem;
`
export const HomeHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const TitleContainer = styled.div`
  margin-bottom: 4.125rem;
  h1 {
    font-size: 3rem;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    color: ${(props) => props.theme['base-title']};
  }

  span {
    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
    margin-top: 1rem;
  }
`
export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const HomeBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  h1 {
    font-size: 2rem;
    font-weight: 800;
    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 3.375rem;
  }
`
export const CoffeeCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
`
