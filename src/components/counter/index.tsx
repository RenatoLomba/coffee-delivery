import { Minus, Plus } from 'phosphor-react'
import { FC } from 'react'

import { CounterContainer } from './styles'

type CounterProps = {
  value?: number
  onIncrease?: (prev: number) => void
  onDecrease?: (prev: number) => void
}

export const Counter: FC<CounterProps> = ({
  value = 0,
  onIncrease,
  onDecrease,
}) => {
  return (
    <CounterContainer>
      <button type="button" onClick={() => onDecrease?.(value)}>
        <Minus size={14} weight="fill" />
      </button>
      <span>{value}</span>
      <button type="button" onClick={() => onIncrease?.(value)}>
        <Plus size={14} weight="fill" />
      </button>
    </CounterContainer>
  )
}
