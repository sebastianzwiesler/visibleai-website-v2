import { Route, Switch } from 'wouter'
import Home from './pages/Home'

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route>404 - Seite nicht gefunden</Route>
    </Switch>
  )
}

export default App