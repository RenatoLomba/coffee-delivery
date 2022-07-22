import { produce } from 'immer'

import { ShoppingCartAction, ShoppingCartActionTypes } from './actions'

export type ShoppingCartCoffee = {
  name: string
  imgUrl: string
  price: number
  qty: number
}

export type ShoppingCartCoffeeList = Map<number, ShoppingCartCoffee>

export type ShoppingCartState = {
  coffees: ShoppingCartCoffeeList
}

export const shoppingCartInitialState: ShoppingCartState = {
  coffees: new Map<number, ShoppingCartCoffee>(),
}

export const shoppingCartReducer = (
  state: ShoppingCartState,
  action: ShoppingCartAction,
) => {
  switch (action.type) {
    case ShoppingCartActionTypes.ADD_COFFEE_TO_SHOPPING_CART: {
      return produce(state, (draft) => {
        const { id, name, imgUrl, price } = action.payload.coffee
        draft.coffees.set(id, { name, imgUrl, price, qty: 1 })
      })
    }

    case ShoppingCartActionTypes.INCREMENT_COFFEE_QTY: {
      return produce(state, (draft) => {
        const { id } = action.payload
        const coffee = state.coffees.get(id)!

        draft.coffees.set(id, { ...coffee, qty: coffee.qty + 1 })
      })
    }

    case ShoppingCartActionTypes.DECREASE_COFFEE_QTY: {
      return produce(state, (draft) => {
        const { id } = action.payload
        const coffee = state.coffees.get(id)!

        draft.coffees.set(id, { ...coffee, qty: coffee.qty - 1 })
      })
    }

    case ShoppingCartActionTypes.REMOVE_COFFEE_FROM_SHOPPING_CART: {
      return produce(state, (draft) => {
        draft.coffees.delete(action.payload.id)
      })
    }

    case ShoppingCartActionTypes.CLEAR_SHOPPING_CART: {
      return produce(state, (draft) => {
        draft.coffees.clear()
      })
    }

    default:
      return state
  }
}
