import { MapPin, ShoppingCart } from 'phosphor-react'
import { FC } from 'react'

import { HeaderContainer } from './styles'

export const Header: FC = () => {
  return (
    <HeaderContainer>
      <img src="/logo.svg" alt="" />

      <nav>
        <span>
          <MapPin weight="fill" size={20} />
          Porto Alegre, RS
        </span>

        <button>
          <ShoppingCart weight="fill" size={20} />
        </button>
      </nav>
    </HeaderContainer>
  )
}
