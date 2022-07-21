import { produce } from 'immer'

import { ShoppingCartAction, ShoppingCartActionTypes } from './actions'

export type ShoppingCartCoffee = {
  id: number
  name: string
  imgUrl: string
  price: number
  qty: number
}

export type ShoppingCartState = {
  coffees: ShoppingCartCoffee[]
}

export const shoppingCartInitialState: ShoppingCartState = {
  coffees: [],
}

export const shoppingCartReducer = (
  state: ShoppingCartState,
  action: ShoppingCartAction,
) => {
  switch (action.type) {
    case ShoppingCartActionTypes.ADD_COFFEE_TO_SHOPPING_CART: {
      return produce(state, (draft) => {
        draft.coffees.push({
          ...action.payload.coffee,
          qty: 1,
        })
      })
    }

    case ShoppingCartActionTypes.INCREMENT_COFFEE_QTY: {
      return produce(state, (draft) => {
        const coffeeIndex = state.coffees.findIndex(
          (coffee) => coffee.id === action.payload.id,
        )

        draft.coffees[coffeeIndex].qty += 1
      })
    }

    case ShoppingCartActionTypes.DECREASE_COFFEE_QTY: {
      return produce(state, (draft) => {
        const coffeeIndex = state.coffees.findIndex(
          (coffee) => coffee.id === action.payload.id,
        )

        draft.coffees[coffeeIndex].qty -= 1
      })
    }

    default:
      return state
  }
}
