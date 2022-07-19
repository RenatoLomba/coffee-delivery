import styled from 'styled-components'

export const CoffeeListContainer = styled.section`
  padding: 2rem 0;

  main {
    padding-top: 3.375rem;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  }
`

export const CoffeeCard = styled.div`
  max-width: 16rem;
  background: ${(props) => props.theme.colors['gray-200']};
  border-radius: 6px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1.5rem;
  padding-bottom: 1.25rem;
  text-align: center;

  img {
    transform: translateY(-1.25rem);
  }

  p {
    color: ${(props) => props.theme.colors['gray-600']};
    margin-top: 0.5rem;
  }
`

export const CoffeeTag = styled.span`
  background: ${(props) => props.theme.colors['yellow-300']};
  color: ${(props) => props.theme.colors['yellow-700']};
  padding: 0.25rem 0.5rem;
  border-radius: 16px;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.text.xs};
  text-transform: uppercase;
  margin-bottom: 1rem;
`

export const CoffeeBuy = styled.footer`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin-top: 2.25rem;

  & > span > strong {
    font-size: ${(props) => props.theme.fontSizes.text['3xl']};
    font-weight: ${(props) => props.theme.fontWeights.extrabold};
    font-family: ${(props) => props.theme.fontFamilies.baloo2};
  }
`

export const CoffeeActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  & > button {
    background: ${(props) => props.theme.colors['purple-700']};
    color: ${(props) => props.theme.colors.white};
    border: 0;
    border-radius: ${(props) => props.theme.radius.md};
    width: 2.375rem;
    height: 2.375rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:focus {
      outline: 0;
      box-shadow: 0 0 0 2px ${(props) => props.theme.colors['purple-500']};
    }
  }
`

export const CoffeeCounter = styled.div`
  width: 4.5rem;
  height: 2.375rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.colors['gray-400']};
  padding: 0 0.5rem;
  border-radius: ${(props) => props.theme.radius.md};

  span {
    color: ${(props) => props.theme.colors['gray-900']};
    font-size: ${(props) => props.theme.fontSizes.text.lg};
  }

  button {
    background: transparent;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`
