import React, {useState} from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Order from './pages/Order'
import Confirmation from './pages/Confirmation'
import Login from './components/admin/Login'
import Ready from './components/admin/Ready'
import Admin from './pages/Admin'
import AuthenticatedRoute from './components/auth/AuthenticatedRoute';
import SubmittedRoute from './components/order/SubmittedRoute';
// import {useState} from "react"
// import './fonts/index.css'

function App() {
  
  const [order, setOrder] = useState();
  return (
    <div>
      <Router>
      <Switch>
        <Route exact path="/order"><Order setOrder={setOrder}/></Route>
        {/* <Route exact path="/confirmation"><Confirmation order={order} /></Route> */}
        <SubmittedRoute exact path="/confirmation"  component={() => <Confirmation order={order}/>}></SubmittedRoute>
        <Route exact path="/admin/login"><Login/></Route>
        <AuthenticatedRoute exact path="/admin/519924812089420/orders" component={Admin} ></AuthenticatedRoute>
        <AuthenticatedRoute exact path="/admin/519924812089420/ready" component={Ready} ></AuthenticatedRoute>
        <Redirect to="/order"/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
