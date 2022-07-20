import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { FC } from 'react'

import { CoffeeItem } from './components/coffee-item'
import { PaymentMethods } from './components/payment-methods'
import { ShippingAddressForm } from './components/shipping-address-form'
import {
  CheckoutContainer,
  OrderInfoSection,
  OrderPricingTotal,
  OrderSelectedCoffeeList,
  OrderSelectedCoffeeSection,
  SubmitOrderButton,
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

            <ShippingAddressForm />
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

            <PaymentMethods />
          </div>
        </div>
      </OrderInfoSection>

      <OrderSelectedCoffeeSection>
        <h4>Cafés selecionados</h4>

        <div className="container">
          <OrderSelectedCoffeeList>
            <CoffeeItem
              coffee={{
                id: 1,
                name: 'Expresso Tradicional',
                imgUrl: '/expresso-tradicional.png',
                price: 9.9,
              }}
            />
            <div className="divider"></div>

            <CoffeeItem
              coffee={{
                id: 2,
                name: 'Latte',
                imgUrl: '/latte.png',
                price: 18.97,
              }}
            />
            <div className="divider"></div>
          </OrderSelectedCoffeeList>

          <OrderPricingTotal>
            <div>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>
            <div>
              <strong>Total</strong>
              <strong>R$ 33,20</strong>
            </div>
          </OrderPricingTotal>

          <SubmitOrderButton type="submit">teste</SubmitOrderButton>
        </div>
      </OrderSelectedCoffeeSection>
    </CheckoutContainer>
  )
}
