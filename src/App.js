import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Order from './components/order/Order'
// import {useState} from "react"
// import './fonts/index.css'

function App() {
  // const [id, setId]= useState('open');
  return (
    <div>
      <Order/>
      <Router>
        {/* <Switch>
          <Route exact path="/" component={Form}><Form setId={setId}></Form></Route>
          <Route exact path="/confirmation" component={ThankYou}><ThankYou id={id}></ThankYou></Route>
        </Switch> */}
      </Router>
    </div>
  );
}

export default App;
