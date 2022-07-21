import { createContext, FC, ReactNode, useContext, useReducer } from 'react'

import {
  shoppingCartInitialState,
  shoppingCartReducer,
} from '../reducers/shopping-cart'
import type { ShoppingCartCoffeeList } from '../reducers/shopping-cart'
import {
  addCoffeeToShoppingCartAction,
  decreaseCoffeeQtyAction,
  incrementCoffeeQtyAction,
  removeCoffeeFromShoppingCartAction,
} from '../reducers/shopping-cart/actions'
import type { CoffeeToAdd } from '../reducers/shopping-cart/actions'

export type ShoppingCartContextData = {
  coffees: ShoppingCartCoffeeList
  addCoffeeToShoppingCart(coffee: CoffeeToAdd): void
  incrementCoffeeQty(id: number): void
  decreaseCoffeeQty(id: number): void
  removeCoffeeFromShoppingCart(id: number): void
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextData)

export const ShoppingCartProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [shoppingCartState, dispatch] = useReducer(
    shoppingCartReducer,
    shoppingCartInitialState,
  )

  const { coffees } = shoppingCartState

  function addCoffeeToShoppingCart(coffee: CoffeeToAdd) {
    dispatch(addCoffeeToShoppingCartAction(coffee))
  }

  function incrementCoffeeQty(id: number) {
    dispatch(incrementCoffeeQtyAction(id))
  }

  function decreaseCoffeeQty(id: number) {
    dispatch(decreaseCoffeeQtyAction(id))
  }

  function removeCoffeeFromShoppingCart(id: number) {
    dispatch(removeCoffeeFromShoppingCartAction(id))
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        coffees,
        addCoffeeToShoppingCart,
        incrementCoffeeQty,
        decreaseCoffeeQty,
        removeCoffeeFromShoppingCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}

export const useShoppingCart = () => useContext(ShoppingCartContext)
