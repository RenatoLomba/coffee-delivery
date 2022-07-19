import { ReactLocation } from '@tanstack/react-location'

import { CheckoutPage } from '../pages/checkout'
import { HomePage } from '../pages/home'
import { SuccessPage } from '../pages/success'

export const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/checkout', element: <CheckoutPage /> },
  { path: '/success', element: <SuccessPage /> },
]

export const location = new ReactLocation()
