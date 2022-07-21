import { CaretLeft, MapPin, ShoppingCart } from 'phosphor-react'
import { FC } from 'react'

import { Link, useNavigate, useLocation } from '@tanstack/react-location'

import { useShoppingCart } from '../../contexts/shopping-cart'
import { HeaderContainer } from './styles'

export const Header: FC = () => {
  const { coffees } = useShoppingCart()
  const navigate = useNavigate()
  const location = useLocation()
  const isCheckoutRoute = location.current.pathname === '/checkout'

  return (
    <HeaderContainer>
      <Link to="/">
        <img src="/logo.svg" alt="" />
      </Link>

      <nav>
        {isCheckoutRoute && coffees.size > 0 && (
          <Link to="/">
            <CaretLeft weight="bold" size={15} />
            <span>Continuar comprando</span>
          </Link>
        )}

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
