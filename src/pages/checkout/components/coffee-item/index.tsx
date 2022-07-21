import { Trash } from 'phosphor-react'
import { FC } from 'react'

import { Counter } from '../../../../components/counter'
import { useShoppingCart } from '../../../../contexts/shopping-cart'
import { CoffeeItemContainer } from './styles'

type CoffeeItemProps = {
  id: number
}

export const CoffeeItem: FC<CoffeeItemProps> = ({ id }) => {
  const {
    coffees,
    incrementCoffeeQty,
    removeCoffeeFromShoppingCart,
    decreaseCoffeeQty,
  } = useShoppingCart()
  const coffee = coffees.get(id)!

  const coffeeItemTotalPrice = coffee.price * coffee.qty

  return (
    <CoffeeItemContainer>
      <img src={coffee.imgUrl} alt={coffee.name} />
      <div className="coffee-details">
        <header>
          <span>{coffee.name}</span>
          <strong>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(coffeeItemTotalPrice)}
          </strong>
        </header>
        <div className="cta">
          <Counter
            isDecreaseDisabled={coffee.qty === 1}
            value={coffee.qty}
            onIncrease={() => incrementCoffeeQty(id)}
            onDecrease={() => decreaseCoffeeQty(id)}
          />

          <button
            onClick={() => removeCoffeeFromShoppingCart(id)}
            type="button"
            className="remove"
          >
            <Trash size={16} />
            <span>Remover</span>
          </button>
        </div>
      </div>
    </CoffeeItemContainer>
  )
}
