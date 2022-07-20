import styled from 'styled-components'

import { DefaultThemeColors } from '../../../../styles/themes/default'

export const IntroContainer = styled.section`
  padding: 6.25rem 0;
  display: flex;
  gap: 3.5rem;
  align-items: center;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  & > img {
    max-width: 29.75rem;
    max-height: 22.5rem;
    min-width: 17.85rem;
    min-height: 13, 5rem;
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 660px) {
    flex-direction: column;
    padding: 2rem 0;
  }
`

export const IntroTitle = styled.div`
  flex: 1;

  p {
    font-size: ${(props) => props.theme.fontSizes.text['2xl']};
    color: ${(props) => props.theme.colors['gray-800']};
    margin-top: 1rem;
  }
`

export const IntroItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2.5rem;
  row-gap: 1.25rem;
  margin-top: 4.125rem;

  @media screen and (max-width: 400px) {
    grid-template-columns: 1fr;
    margin-top: 2rem;
  }
`

const bgColors = {
  yellow: 'yellow-500',
  'yellow-dark': 'yellow-700',
  purple: 'purple-500',
  gray: 'gray-700',
} as const

type IntroItemProps = {
  bgColorKey?: keyof typeof bgColors
}

export const IntroItem = styled.div<IntroItemProps>`
  display: flex;
  gap: 0.75rem;
  align-items: center;

  span {
    width: 2rem;
    height: 2rem;
    background: ${({ theme, bgColorKey = 'yellow' }) =>
      theme.colors[bgColors[bgColorKey] as DefaultThemeColors]};
    padding: 0.5rem;
    color: ${(props) => props.theme.colors.white};
    border-radius: 50%;
  }
`
