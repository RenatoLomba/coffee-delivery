import { FC } from 'react'

import { Outlet, Router as ReactLocationRouter } from '@tanstack/react-location'

import { DefaultLayout } from '../layouts/default'
import { location, routes } from './routes'

export const Router: FC = () => {
  return (
    <ReactLocationRouter location={location} routes={routes}>
      <DefaultLayout>
        <Outlet />
      </DefaultLayout>
    </ReactLocationRouter>
  )
}
