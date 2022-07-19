import styled from 'styled-components'

import { DefaultThemeColors } from '../../../../styles/themes/default'

export const IntroContainer = styled.section`
  padding: 6.25rem 0;
  display: flex;
  gap: 3.5rem;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`

export const IntroTitle = styled.div`
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
