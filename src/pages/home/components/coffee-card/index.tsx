import { ShoppingCart } from 'phosphor-react'
import { FC } from 'react'

import { useNavigate } from '@tanstack/react-location'

import { Counter } from '../../../../components/counter'
import { useShoppingCart } from '../../../../contexts/shopping-cart'
import {
  CoffeeActions,
  CoffeeBuy,
  CoffeeCardContainer,
  CoffeeTag,
  CoffeeTagsContainer,
} from './styles'

type Coffee = {
  id: number
  name: string
  imgUrl: string
  description: string
  price: number
  tags: {
    key: string
    name: string
  }[]
}

type CoffeeCardProps = {
  coffee: Coffee
}

export const CoffeeCard: FC<CoffeeCardProps> = ({ coffee }) => {
  const {
    coffees,
    incrementCoffeeQty,
    addCoffeeToShoppingCart,
    decreaseCoffeeQty,
    removeCoffeeFromShoppingCart,
  } = useShoppingCart()
  const navigate = useNavigate()

  const coffeeOnCart = coffees.get(coffee.id)

  function handleIncrementButtonClick() {
    const { id } = coffee

    if (coffeeOnCart) {
      incrementCoffeeQty(id)
    } else {
      addCoffeeToShoppingCart({
        id,
        name: coffee.name,
        imgUrl: coffee.imgUrl,
        price: coffee.price,
      })
    }
  }

  function handleDecreaseButtonClick() {
    if (!coffeeOnCart || coffeeOnCart.qty === 0) return

    const { id } = coffee

    if (coffeeOnCart.qty === 1) {
      removeCoffeeFromShoppingCart(id)
    } else {
      decreaseCoffeeQty(id)
    }
  }

  function handleShoppingCartButtonClick() {
    const { id } = coffee

    if (coffeeOnCart) {
      incrementCoffeeQty(id)
    } else {
      addCoffeeToShoppingCart({
        id,
        name: coffee.name,
        imgUrl: coffee.imgUrl,
        price: coffee.price,
      })
    }

    navigate({
      to: '/checkout',
    })
  }

  return (
    <CoffeeCardContainer key={coffee.id}>
      <img src={coffee.imgUrl} alt={coffee.name} />
      <CoffeeTagsContainer>
        {coffee.tags.map((tag) => (
          <CoffeeTag key={tag.key}>{tag.name}</CoffeeTag>
        ))}
      </CoffeeTagsContainer>
      <h3>{coffee.name}</h3>
      <p>{coffee.description}</p>

      <CoffeeBuy>
        <span>
          <strong>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(coffee.price)}
          </strong>
        </span>

        <CoffeeActions>
          <Counter
            value={coffeeOnCart?.qty}
            onIncrease={handleIncrementButtonClick}
            onDecrease={handleDecreaseButtonClick}
            isDecreaseDisabled={!coffeeOnCart || coffeeOnCart.qty === 0}
          />

          <button type="button" onClick={handleShoppingCartButtonClick}>
            <ShoppingCart weight="fill" size={20} />
          </button>
        </CoffeeActions>
      </CoffeeBuy>
    </CoffeeCardContainer>
  )
}
