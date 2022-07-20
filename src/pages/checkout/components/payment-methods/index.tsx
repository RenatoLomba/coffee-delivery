import { Bank, CreditCard, Money } from 'phosphor-react'
import { FC } from 'react'

import { PaymentMethodsContainer } from './styles'

export const PaymentMethods: FC = () => {
  return (
    <PaymentMethodsContainer>
      <button type="button" className="pay-card active">
        <CreditCard size={16} />
        <span>Cartão de Crédito</span>
      </button>
      <button type="button" className="pay-card">
        <Bank size={16} />
        <span>Cartão de Débito</span>
      </button>
      <button type="button" className="pay-card">
        <Money size={16} />
        <span>Dinheiro</span>
      </button>
    </PaymentMethodsContainer>
  )
}
