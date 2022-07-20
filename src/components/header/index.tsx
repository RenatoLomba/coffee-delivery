import { MapPin, ShoppingCart } from 'phosphor-react'
import { FC } from 'react'

import { Link, useNavigate } from '@tanstack/react-location'

import { HeaderContainer } from './styles'

export const Header: FC = () => {
  const navigate = useNavigate()

  return (
    <HeaderContainer>
      <Link to="/">
        <img src="/logo.svg" alt="" />
      </Link>

      <nav>
        <span>
          <MapPin weight="fill" size={20} />
          Porto Alegre, RS
        </span>

        <button
          type="button"
          onClick={() =>
            navigate({
              to: '/checkout',
            })
          }
        >
          <ShoppingCart weight="fill" size={20} />
        </button>
      </nav>
    </HeaderContainer>
  )
}
