import { Trash } from 'phosphor-react'
import { FC } from 'react'

import { Counter } from '../../../../components/counter'
import { CoffeeItemContainer } from './styles'

type Coffee = {
  id: number
  name: string
  imgUrl: string
  price: number
}

type CoffeeItemProps = {
  coffee: Coffee
}

export const CoffeeItem: FC<CoffeeItemProps> = ({ coffee }) => {
  return (
    <CoffeeItemContainer>
      <img src={coffee.imgUrl} alt={coffee.name} />
      <div className="coffee-details">
        <header>
          <span>{coffee.name}</span>
          <strong>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(coffee.price)}
          </strong>
        </header>
        <div className="cta">
          <Counter value={1} />

          <button type="button" className="remove">
            <Trash size={16} />
            <span>Remover</span>
          </button>
        </div>
      </div>
    </CoffeeItemContainer>
  )
}
