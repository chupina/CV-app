import "./App.scss";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home/Home";
import Inner from "./pages/Inner/Inner";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/inner">
          <Inner />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
