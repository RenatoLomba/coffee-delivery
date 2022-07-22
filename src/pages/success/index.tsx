import { differenceInMinutes } from 'date-fns'
import { MapPin, Timer } from 'phosphor-react'
import { FC, useCallback, useEffect, useState } from 'react'

import { useNavigate } from '@tanstack/react-location'

import { useOrders } from '../../contexts/orders'
import { paymentMethods } from '../../utils/validators/order-validator'
import { SuccessPageContainer } from './styles'

export const SuccessPage: FC = () => {
  const navigate = useNavigate()
  const { order } = useOrders()

  useEffect(() => {
    if (!order) {
      navigate({ to: '/' })
    }
  }, [order, navigate])

  const calcMinutesToDeliver = useCallback(() => {
    if (!order) return
    return differenceInMinutes(order.deliveryDate, new Date())
  }, [order])

  const [minutesToDeliver, setMinutesToDeliver] = useState(() =>
    calcMinutesToDeliver(),
  )
  const [isDelivered, setIsDelivered] = useState(() => minutesToDeliver === 0)

  useEffect(() => {
    let deliveryInterval: number

    if (!isDelivered) {
      deliveryInterval = setInterval(() => {
        const minutesRest = calcMinutesToDeliver()
        if (minutesRest === 0) {
          setIsDelivered(true)
        }

        setMinutesToDeliver(minutesRest)
      }, 1000)
    }

    return () => {
      clearInterval(deliveryInterval)
    }
  }, [calcMinutesToDeliver, isDelivered])

  const chosenPaymentMethod = paymentMethods.find(
    (pm) => pm.key === order?.paymentMethod,
  )

  return (
    <SuccessPageContainer>
      <div className="container">
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>

        <div className="order-info-card">
          <div className="info">
            <span className="purple">
              <MapPin size={16} weight="fill" />
            </span>
            <div className="details">
              <p>
                Entrega em{' '}
                <strong>
                  {order?.shippingAddress.street},{' '}
                  {order?.shippingAddress.number}
                </strong>
              </p>
              <p>
                {order?.shippingAddress.neighborhood} -{' '}
                {order?.shippingAddress.city}, {order?.shippingAddress.state}
              </p>
            </div>
          </div>
          <div className="info">
            <span className="yellow">
              <Timer size={16} weight="fill" />
            </span>
            <div className="details">
              <p>Previsão de entrega</p>
              <p>
                {isDelivered ? (
                  <strong>Entregue!</strong>
                ) : (
                  <strong>Daqui a {minutesToDeliver} min</strong>
                )}
              </p>
            </div>
          </div>
          <div className="info">
            <span className="yellow-dark">
              <Timer size={16} weight="fill" />
            </span>
            <div className="details">
              <p>Pagamento na entrega</p>
              <p>
                <strong>{chosenPaymentMethod?.text}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
      <img src="/delivering.png" alt="" />
    </SuccessPageContainer>
  )
}
