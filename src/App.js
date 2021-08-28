import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Order from './pages/Order'
import Confirmation from './components/confirmation/Confirmation'
// import {useState} from "react"
// import './fonts/index.css'

function App() {
  // const [id, setId]= useState('open');
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/order"><Order/></Route>
          <Route exact path="/confirmation"><Confirmation/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
