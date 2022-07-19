import { FC, ReactNode } from 'react'

import { Header } from '../../components/header'
import { DefaultLayoutContainer } from './styles'

type DefaultLayoutProps = {
  children: ReactNode
}

export const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <DefaultLayoutContainer>
      <Header />

      {children}
    </DefaultLayoutContainer>
  )
}
