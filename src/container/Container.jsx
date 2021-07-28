import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { routes } from '../routes'
import { Loading } from '../components/Loading'

export const Container = () => {
  return (
    <main className='main'>
      <React.Suspense fallback={<Loading />}>
        <Switch>
          {routes.map((route, idx) => {
            const { path, exact, name } = route
            return (
              route.component && (
                <Route
                  key={idx}
                  path={path}
                  exact={exact}
                  name={name}
                  component={route.component}
                  // render={(props) => <route.component {...props} />}
                />
              )
            )
          })}
        </Switch>
      </React.Suspense>
    </main>
  )
}
