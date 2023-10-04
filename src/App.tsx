import React from 'react'
import { Router, Route, Redirect } from 'wouter'
import MainView from './pages/MainView'
import AccountView from './pages/AccountView'
import NetworkErrorLabel from './components/common/NetworkErrorLabel'
import Header from './components/header/Header'
import { ApolloProvider } from '@apollo/client'
import { predyArbitrum } from './utils/apollo-client'

const App = () => {
  return (
    <ApolloProvider client={predyArbitrum}>
      <div>
        <NetworkErrorLabel />
        <Router>
          <Header />
          <div className="mx-auto mt-20">
            <Route path="/">
              <Redirect to="/v5" />
            </Route>
            <Route path="/v320">
              <Redirect to="/v5" />
            </Route>

            <Route path="/v5" component={MainView} />
            <Route path="/v5/account/:chain/:account" component={AccountView} />
          </div>
        </Router>
      </div>
    </ApolloProvider >
  )
}

export default App
