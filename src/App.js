import {Route, Switch, Redirect} from 'react-router-dom'

import LoginRoute from './components/LoginRoute'
import HomeRoute from './components/HomeRoute'
import NotFoundRoute from './components/NotFoundRoute'

import './App.css'

// Replace your code here
const App = () => (
  <>
    <Switch>
      <Route exact path="/ebank/login" component={LoginRoute} />
      <Route exact path="/" component={HomeRoute} />
      <Route exact path="/bad-path" component={NotFoundRoute} />
      <Redirect to="not-found" />
    </Switch>
  </>
)

export default App
