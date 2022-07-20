import { ShoppingCart } from 'phosphor-react'
import { FC } from 'react'

import { Counter } from '../../../../components/counter'
import {
  CoffeeActions,
  CoffeeBuy,
  CoffeeCardContainer,
  CoffeeTag,
  CoffeeTagsContainer,
} from './styles'

type Coffee = {
  id: number
  name: string
  imgUrl: string
  description: string
  price: number
  tags: {
    key: string
    name: string
  }[]
}

type CoffeeCardProps = {
  coffee: Coffee
}

export const CoffeeCard: FC<CoffeeCardProps> = ({ coffee }) => {
  return (
    <CoffeeCardContainer key={coffee.id}>
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
          <Counter />

          <button>
            <ShoppingCart weight="fill" size={20} />
          </button>
        </CoffeeActions>
      </CoffeeBuy>
    </CoffeeCardContainer>
  )
}
