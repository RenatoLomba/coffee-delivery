import { FC } from 'react'

import db from '../../../../db.json'
import { CoffeeCard } from '../coffee-card'
import { CoffeeListContainer } from './styles'

export const CoffeeList: FC = () => {
  return (
    <CoffeeListContainer>
      <header>
        <h2>Nossos cafés</h2>
      </header>

      <main>
        {db.coffee.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </main>
    </CoffeeListContainer>
  )
}
