import { ArchiveBox, Coffee, ShoppingCart, Timer } from 'phosphor-react'
import { FC } from 'react'

import {
  IntroItem,
  IntroTitle,
  IntroContainer,
  IntroItemsContainer,
} from './styles'

export const HomeIntro: FC = () => {
  return (
    <IntroContainer>
      <div>
        <IntroTitle>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </IntroTitle>

        <IntroItemsContainer>
          <IntroItem bgColorKey="yellow-dark">
            <span>
              <ShoppingCart size={16} weight="fill" />
            </span>
            <p>Compra simples e segura</p>
          </IntroItem>
          <IntroItem bgColorKey="gray">
            <span>
              <ArchiveBox size={16} weight="fill" />
            </span>
            <p>Embalagens mantém o café intacto</p>
          </IntroItem>
          <IntroItem bgColorKey="yellow">
            <span>
              <Timer size={16} weight="fill" />
            </span>
            <p>Entrega rápida e rastreada</p>
          </IntroItem>
          <IntroItem bgColorKey="purple">
            <span>
              <Coffee size={16} weight="fill" />
            </span>
            <p>O café chega fresquinho até você</p>
          </IntroItem>
        </IntroItemsContainer>
      </div>

      <img src="/hero.png" alt="" />
    </IntroContainer>
  )
}
