import classNames from 'classnames'
import { FC } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import InputMask from 'react-input-mask'

import { OrderFormFields } from '../../../../utils/validators/order-validator'
import { OrderShippingAddressFormContainer } from './styles'

export const ShippingAddressForm: FC = () => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<OrderFormFields>()

  return (
    <OrderShippingAddressFormContainer>
      <div className="form-row">
        <Controller
          name="cep"
          control={control}
          render={({ field }) => (
            <InputMask
              className={classNames('w-4', {
                error: !!errors.cep,
              })}
              mask="99999-999"
              {...field}
              onChange={(e) => field.onChange(e.target.value.replace('-', ''))}
            />
          )}
        />
      </div>

      <div className="form-row">
        <input
          {...register('street')}
          className={classNames({
            error: !!errors.street,
          })}
          type="text"
          placeholder="Rua"
        />
      </div>

      <div className="form-row">
        <input
          {...register('number', { valueAsNumber: true })}
          className={classNames('w-4', {
            error: !!errors.number,
          })}
          type="number"
          placeholder="Número"
        />
        <input
          {...register('complement')}
          className={classNames({
            error: !!errors.complement,
          })}
          type="text"
          placeholder="Complemento"
        />
      </div>

      <div className="form-row">
        <input
          {...register('neighborhood')}
          className={classNames('w-4', {
            error: !!errors.neighborhood,
          })}
          type="text"
          placeholder="Bairro"
        />
        <input
          {...register('city')}
          className={classNames('w-5', {
            error: !!errors.city,
          })}
          type="text"
          placeholder="Cidade"
        />
        <input
          {...register('state')}
          type="text"
          placeholder="UF"
          className={classNames('w-1', {
            error: !!errors.state,
          })}
        />
      </div>
    </OrderShippingAddressFormContainer>
  )
}
