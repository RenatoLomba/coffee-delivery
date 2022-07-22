import { addMinutes } from 'date-fns'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import superjson from 'superjson'

import { PaymentMethods } from '../utils/validators/order-validator'
import { useShoppingCart } from './shopping-cart'

type Order = {
  shippingAddress: {
    street: string
    number: number
    neighborhood: string
    city: string
    state: string
  }
  paymentMethod: PaymentMethods
  deliveryDate: Date
  orderDate: Date
}

type CreateOrderData = Omit<Order, 'deliveryDate' | 'orderDate'>

export type OrdersContextData = {
  order: Order | null
  createOrder(data: CreateOrderData): void
}

export const OrdersContext = createContext({} as OrdersContextData)

export function OrdersProvider({ children }: { children: ReactNode }) {
  const { clearShoppingCart } = useShoppingCart()
  const [order, setOrder] = useState<Order | null>(() => {
    const storedStateAsJSON = localStorage.getItem(
      '@coffee-delivery:order-state-1.0.0',
    )

    if (storedStateAsJSON) {
      return superjson.parse<Order>(storedStateAsJSON)
    }

    return null
  })

  function createOrder(data: CreateOrderData) {
    const dateNow = new Date()

    setOrder({
      ...data,
      orderDate: dateNow,
      deliveryDate: addMinutes(dateNow, 30),
    })

    clearShoppingCart()
  }

  useEffect(() => {
    if (order) {
      const orderAsJSON = superjson.stringify(order)

      localStorage.setItem('@coffee-delivery:order-state-1.0.0', orderAsJSON)
    }
  }, [order])

  return (
    <OrdersContext.Provider value={{ order, createOrder }}>
      {children}
    </OrdersContext.Provider>
  )
}

export const useOrders = () => useContext(OrdersContext)
