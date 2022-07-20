import styled from 'styled-components'

export const CoffeeListContainer = styled.section`
  padding: 2rem 0;

  @media screen and (max-width: 540px) {
    header {
      text-align: center;
    }
  }

  main {
    padding-top: 3.375rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    gap: 2rem;

    @media screen and (max-width: 1200px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (max-width: 840px) {
      grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 540px) {
      grid-template-columns: 1fr;
    }
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
    height: 5rem;
  }
`

export const CoffeeTagsContainer = styled.header`
  display: flex;
  gap: 0.5rem;
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
  user-select: none;
`

export const CoffeeBuy = styled.footer`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;

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
    transition: all 0.2s ease;

    &:focus {
      outline: 0;
      box-shadow: 0 0 0 2px ${(props) => props.theme.colors['purple-500']};
    }

    &:hover {
      background: ${(props) => props.theme.colors['purple-500']};
    }
  }
`
