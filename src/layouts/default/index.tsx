import { FC, ReactNode } from 'react'

type DefaultLayoutProps = {
  children: ReactNode
}

export const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div>
      <header>Header</header>

      {children}
    </div>
  )
}
