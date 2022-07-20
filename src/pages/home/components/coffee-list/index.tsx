import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { FC } from 'react'

import db from '../../../../db.json'
import {
  CoffeeActions,
  CoffeeBuy,
  CoffeeCard,
  CoffeeCounter,
  CoffeeListContainer,
  CoffeeTag,
  CoffeeTagsContainer,
} from './styles'

export const CoffeeList: FC = () => {
  return (
    <CoffeeListContainer>
      <header>
        <h2>Nossos cafés</h2>
      </header>

      <main>
        {db.coffee.map((coffee) => (
          <CoffeeCard key={coffee.id}>
            <img src={coffee.imgUrl} alt={coffee.name} />
            <CoffeeTagsContainer>
              {coffee.tags.map((tag) => (
                <CoffeeTag key={tag.key}>{tag.name}</CoffeeTag>
              ))}
            </CoffeeTagsContainer>
            <h3>{coffee.name}</h3>
            <p>{coffee.description}</p>

            <CoffeeBuy>
              <span>
                <strong>
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(coffee.price)}
                </strong>
              </span>

              <CoffeeActions>
                <CoffeeCounter>
                  <button>
                    <Minus size={14} weight="fill" />
                  </button>
                  <span>0</span>
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
