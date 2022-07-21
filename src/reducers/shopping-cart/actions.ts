export enum ShoppingCartActionTypes {
  ADD_COFFEE_TO_SHOPPING_CART = 'ADD_COFFEE_TO_SHOPPING_CART',
  INCREMENT_COFFEE_QTY = 'INCREMENT_COFFEE_QTY',
  DECREASE_COFFEE_QTY = 'DECREASE_COFFEE_QTY',
}

export type CoffeeToAdd = {
  id: number
  name: string
  imgUrl: string
  price: number
}

export function addCoffeeToShoppingCartAction(coffee: CoffeeToAdd) {
  return {
    type: ShoppingCartActionTypes.ADD_COFFEE_TO_SHOPPING_CART,
    payload: {
      coffee,
    },
  } as const
}

export function incrementCoffeeQtyAction(id: number) {
  return {
    type: ShoppingCartActionTypes.INCREMENT_COFFEE_QTY,
    payload: {
      id,
    },
  } as const
}

export function decreaseCoffeeQtyAction(id: number) {
  return {
    type: ShoppingCartActionTypes.DECREASE_COFFEE_QTY,
    payload: {
      id,
    },
  } as const
}

export type ShoppingCartAction = ReturnType<
  | typeof addCoffeeToShoppingCartAction
  | typeof incrementCoffeeQtyAction
  | typeof decreaseCoffeeQtyAction
>
