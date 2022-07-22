import classNames from 'classnames'
import { FC } from 'react'
import { useFormContext } from 'react-hook-form'

import {
  OrderFormFields,
  paymentMethods,
} from '../../../../utils/validators/order-validator'
import { PaymentMethodsContainer } from './styles'

export const PaymentMethods: FC = () => {
  const { setValue, watch } = useFormContext<OrderFormFields>()

  return (
    <PaymentMethodsContainer>
      {paymentMethods.map(({ key, text, icon: Icon }) => (
        <button
          onClick={() => setValue('paymentMethod', key)}
          key={key}
          type="button"
          className={classNames('pay-card', {
            active: watch('paymentMethod') === key,
          })}
        >
          <Icon size={16} />
          <span>{text}</span>
        </button>
      ))}
    </PaymentMethodsContainer>
  )
}
