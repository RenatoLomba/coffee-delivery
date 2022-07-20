import { FC } from 'react'

import { OrderShippingAddressFormContainer } from './styles'

export const ShippingAddressForm: FC = () => {
  return (
    <OrderShippingAddressFormContainer>
      <div className="form-row">
        <input type="text" placeholder="CEP" className="w-4" />
      </div>

      <div className="form-row">
        <input type="text" placeholder="Rua" />
      </div>

      <div className="form-row">
        <input type="number" placeholder="Número" className="w-4" />
        <input type="text" placeholder="Complemento" />
      </div>

      <div className="form-row">
        <input type="text" placeholder="Bairro" className="w-4" />
        <input type="text" placeholder="Cidade" className="w-5" />
        <input type="text" placeholder="UF" className="w-1" />
      </div>
    </OrderShippingAddressFormContainer>
  )
}
