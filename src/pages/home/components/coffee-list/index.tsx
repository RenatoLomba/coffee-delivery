import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { FC } from 'react'

import {
  CoffeeActions,
  CoffeeBuy,
  CoffeeCard,
  CoffeeCounter,
  CoffeeListContainer,
  CoffeeTag,
} from './styles'

export const CoffeeList: FC = () => {
  return (
    <CoffeeListContainer>
      <header>
        <h2>Nossos cafés</h2>
      </header>

      <main>
        {[...new Array(10)].map((key) => (
          <CoffeeCard key={key}>
            <img src="/expresso-tradicional.png" alt="" />
            <CoffeeTag>Tradicional</CoffeeTag>
            <h3>Expresso Tradicional</h3>
            <p>O tradicional café feito com água quente e grãos moídos</p>

            <CoffeeBuy>
              <span>
                R$ <strong>9,90</strong>
              </span>

              <CoffeeActions>
                <CoffeeCounter>
                  <button>
                    <Minus size={14} weight="fill" />
                  </button>
                  <span>1</span>
                  <button>
                    <Plus size={14} weight="fill" />
                  </button>
                </CoffeeCounter>

                <button>
                  <ShoppingCart weight="fill" size={20} />
                </button>
              </CoffeeActions>
            </CoffeeBuy>
          </CoffeeCard>
        ))}
      </main>
    </CoffeeListContainer>
  )
}
