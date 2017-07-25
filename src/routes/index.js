import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Template from '../containers/Template.js'
import TicTacToe from '../containers/TicTacToe.js'
import Profile from '../containers/Profile.js'
import Relay from 'react-relay'
import auth from '../utils/auth.js'

const ViewerQueries = {
  viewer: () => Relay.QL`query { viewer }`
}

const createRoutes = () => {
  return (
    <Route
      path='/'
      component={Template}
      queries={ViewerQueries}
      auth={auth}
    >
      <IndexRoute
        component={TicTacToe}
        queries={ViewerQueries}
      />
      <Route
        path={'/profile'}
        component={Profile}
        queries={ViewerQueries}
      />
    </Route>
  )
}

const Routes = createRoutes()

export default Routes