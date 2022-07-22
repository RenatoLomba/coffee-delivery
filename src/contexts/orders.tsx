import { addMinutes } from 'date-fns'
import { createContext, ReactNode, useContext, useState } from 'react'

import { PaymentMethods } from '../utils/validators/order-validator'

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
  order?: Order
  createOrder(data: CreateOrderData): void
}

export const OrdersContext = createContext({} as OrdersContextData)

export function OrdersProvider({ children }: { children: ReactNode }) {
  const [order, setOrder] = useState<Order>()

  function createOrder(data: CreateOrderData) {
    const dateNow = new Date()

    setOrder({
      ...data,
      orderDate: dateNow,
      deliveryDate: addMinutes(dateNow, 30),
    })
  }

  return (
    <OrdersContext.Provider value={{ order, createOrder }}>
      {children}
    </OrdersContext.Provider>
  )
}

export const useOrders = () => useContext(OrdersContext)
