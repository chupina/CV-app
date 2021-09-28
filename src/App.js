import "./App.scss";
import { Route, Switch} from 'react-router-dom'

import { Home } from "./pages/Home/Home";
import { Inner } from "./pages/Inner/Inner";
function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/">
      <Home/>
      </Route>
      <Route  path="/inner">
        <Inner/>
       </Route>
      </Switch>
           
      
    </div>
  );
}

export default App;
