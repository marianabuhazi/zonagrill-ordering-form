import React, {useState} from 'react'
import auth from '../components/auth/auth'
import {withRouter} from 'react-router-dom'

const Admin = (props) => {
    const [orders, setOrders]=useState([
    {
        'id':1,
        'email':'marian@gmail.com',
        'fname':'marian',
        'lname':'abuhazi',
        'appetizer':'tequeños',
        'entree':'none',
        'drink':'sprite',
        'comments':''
    },
    {
        'id':2,
        'email':'patty@gmail.com',
        'fname':'patty',
        'lname':'zambrano',
        'appetizer':'none',
        'entree':'none',
        'drink':'coke',
        'comments':''
    },
    {
        'id':3,
        'email':'sweet@gmail.com',
        'fname':'sweet',
        'lname':'caroline',
        'appetizer':'none',
        'entree':'none',
        'drink':'none',
        'comments':''
    }
  
])
    const readyOrder = (id) => {
        setOrders(orders.filter(o=>o.id!==id))
    }
       
    return (
        <div>
            <button onClick={
                ()=>{
                    auth.logout(()=>{
                        props.history.push("/admin/login")
                    })
                }
            }>
                Logout
            </button>
            <button onClick={
                ()=>{
                    props.history.push("/admin/519924812089420/ready")
                }
            }>
                Ready Orders
            </button>
            <br/>
            {orders.length===0 ? <h3>No pending orders at this time</h3> : orders.map(o=>{
                return(
                <div key={o.id}>
                    <p>ORDER#{o.id}</p>
                    <p>NAME: {o.lname}, {o.fname}</p>
                    <p>ENTREE: {o.entree}</p>
                    <p>APPETIZER: {o.appetizer}</p>
                    <p>DRINK: {o.drink}</p>
                    <p>COMMENTS: {o.comments}</p>
                    <button onClick={()=>readyOrder(o.id)}>Ready</button>    
                </div>  
            )}) }
        </div>
    )
}

export default withRouter(Admin)
