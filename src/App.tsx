import { Route, Switch } from "wouter";
import Home from "./pages/Home";

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route>
        <div className="min-h-screen flex items-center justify-center">
          <h1>404 - Seite nicht gefunden</h1>
        </div>
      </Route>
    </Switch>
  );
}

export default App;
