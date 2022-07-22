import classNames from 'classnames'
import { FC } from 'react'
import { useFormContext } from 'react-hook-form'

import {
  OrderFormFields,
  paymentMethods,
} from '../../../../utils/validators/order-validator'
import { PaymentMethodItems, PaymentMethodsContainer } from './styles'

export const PaymentMethods: FC = () => {
  const {
    setValue,
    watch,
    formState: { errors },
  } = useFormContext<OrderFormFields>()

  return (
    <PaymentMethodsContainer>
      {errors.paymentMethod && (
        <span className="error-message">{errors.paymentMethod.message}</span>
      )}
      <PaymentMethodItems>
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
      </PaymentMethodItems>
    </PaymentMethodsContainer>
  )
}
