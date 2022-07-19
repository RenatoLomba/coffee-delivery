import { FC } from 'react'

import { CoffeeList } from './components/coffee-list'
import { Intro } from './components/intro'

export const HomePage: FC = () => {
  return (
    <div>
      <Intro />
      <CoffeeList />
    </div>
  )
}
