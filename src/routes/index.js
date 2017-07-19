import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Template from '../containers/Template.js'
import TicTacToe from '../containers/TicTacToe.js'
import Profile from '../containers/Profile.js'

const createRoutes = () => {
  return (
    <Route
      path='/'
      component={Template}
    >
      <IndexRoute
        component={TicTacToe}
      />
      <Route
        path={'/profile'}
        component={Profile}
      />
    </Route>
  )
}

const Routes = createRoutes()

export default Routes