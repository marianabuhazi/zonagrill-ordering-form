import React, {useState} from 'react'
import {Link, withRouter} from 'react-router-dom'
import auth from '../auth/auth'
import '../order/OrderForm.css'

const Login = (props) => {
    const PASS= 519924812089420
    const [user, setUser]=useState()
    const [pw, setPw]=useState()
    const [mess, setMess]=useState()


    const USER="yackselys";
    const PW="test"

    const signIn= (e) => {
        e.preventDefault()
        if(user===USER && pw===PW){
            setMess("Signing in...");
            auth.login(()=>{
                props.history.push(`/admin/${PASS}/orders`)
            })
        }
        else if(user===USER || pw===PW){
            setMess("Invalid username or password");
        }
        else{
            setMess("Wrong");
        }
    }

    return (
        <div>
            <h1>Admin Login</h1>
            <form className="question">
                <label className="label">
                    Username
                    <span className="star"> *</span>
                </label>
                <input className="input" type="text" onChange={e=>setUser(e.target.value)} ></input>
                <br/>
                <label className="label">
                    Password
                    <span className="star"> *</span>
                </label>
                <input className="input" type="text" onChange={e=>setPw(e.target.value)}></input>
                <br/>
                <button onClick={signIn}>Sign in</button>
                <h3>{mess}</h3>
            </form> 
            <h5>This page is for admins only. If you are not an admin, please return to order</h5>
            <Link to="/order">Back to Order</Link>
        </div>
    )
}
export default withRouter(Login)