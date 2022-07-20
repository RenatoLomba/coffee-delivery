import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { FC } from 'react'

import {
  CheckoutContainer,
  OrderInfoSection,
  OrderPaymentMethods,
  OrderSelectedCoffeeSection,
  OrderShippingAddressForm,
} from './styles'

export const CheckoutPage: FC = () => {
  return (
    <CheckoutContainer>
      <OrderInfoSection>
        <h4>Complete seu pedido</h4>

        <div className="container">
          <div className="card">
            <header>
              <MapPinLine size={22} />
              <div>
                <span className="title">Endereço de Entrega</span>
                <span className="subtitle">
                  Informe o endereço onde deseja receber seu pedido
                </span>
              </div>
            </header>

            <OrderShippingAddressForm>
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
            </OrderShippingAddressForm>
          </div>
          <div className="card">
            <header>
              <CurrencyDollar size={22} />
              <div>
                <span className="title">Pagamento</span>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </header>

            <OrderPaymentMethods>
              <div className="pay-card active">
                <CreditCard size={16} />
                <span>Cartão de Crédito</span>
              </div>
              <div className="pay-card">
                <Bank size={16} />
                <span>Cartão de Débito</span>
              </div>
              <div className="pay-card">
                <Money size={16} />
                <span>Dinheiro</span>
              </div>
            </OrderPaymentMethods>
          </div>
        </div>
      </OrderInfoSection>

      <OrderSelectedCoffeeSection style={{ background: 'blue' }}>
        teste
      </OrderSelectedCoffeeSection>
    </CheckoutContainer>
  )
}
