import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import React, { FC, useMemo } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { Link } from '@tanstack/react-location'

import { useShoppingCart } from '../../contexts/shopping-cart'
import {
  OrderFormFields,
  orderSchemaValidator,
} from '../../utils/validators/order-validator'
import { CoffeeItem } from './components/coffee-item'
import { PaymentMethods } from './components/payment-methods'
import { ShippingAddressForm } from './components/shipping-address-form'
import {
  CheckoutContainer,
  EmptyCartContainer,
  OrderInfoSection,
  OrderPricingTotal,
  OrderSelectedCoffeeList,
  OrderSelectedCoffeeSection,
  SubmitOrderButton,
} from './styles'

const currencyFormatted = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

export const CheckoutPage: FC = () => {
  const { coffees } = useShoppingCart()
  const orderForm = useForm<OrderFormFields>({
    resolver: zodResolver(orderSchemaValidator),
  })

  const { handleSubmit } = orderForm

  const itemsTotal = useMemo(() => {
    if (coffees.size === 0) return 0

    return [...coffees.values()].reduce((total, coffee) => {
      total += coffee.price * coffee.qty
      return total
    }, 0)
  }, [coffees])

  const shippingPrice = itemsTotal * 0.1

  const orderTotalPrice = itemsTotal + shippingPrice

  function handleOrderSubmit(data: OrderFormFields) {
    console.log(data)
  }

  if (coffees.size === 0) {
    return (
      <EmptyCartContainer>
        <Link to="/">Carrinho de compras vazio</Link>
      </EmptyCartContainer>
    )
  }

  return (
    <CheckoutContainer onSubmit={handleSubmit(handleOrderSubmit)}>
      <OrderInfoSection>
        <h4>Complete seu pedido</h4>

        <FormProvider {...orderForm}>
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
        </FormProvider>
      </OrderInfoSection>

      <OrderSelectedCoffeeSection>
        <h4>Cafés selecionados</h4>

        <div className="container">
          <OrderSelectedCoffeeList>
            {[...coffees.entries()].map(([key, coffee]) => (
              <React.Fragment key={key}>
                <CoffeeItem id={key} />
                <div className="divider"></div>
              </React.Fragment>
            ))}
          </OrderSelectedCoffeeList>

          <OrderPricingTotal>
            <div>
              <span>Total de itens</span>
              <span>{currencyFormatted.format(itemsTotal)}</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>{currencyFormatted.format(shippingPrice)}</span>
            </div>
            <div>
              <strong>Total</strong>
              <strong>{currencyFormatted.format(orderTotalPrice)}</strong>
            </div>
          </OrderPricingTotal>

          <SubmitOrderButton type="submit">Confirmar Pedido</SubmitOrderButton>
        </div>
      </OrderSelectedCoffeeSection>
    </CheckoutContainer>
  )
}
