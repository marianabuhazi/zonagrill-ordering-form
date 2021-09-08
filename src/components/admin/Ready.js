import React from 'react'
import auth from '../auth/auth'
import {withRouter} from 'react-router-dom'

const Ready = (props) => {
    const ready=[
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
      
    ]
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
                    props.history.push("/admin/519924812089420/orders")
                }
            }>
                Pending Orders
            </button>
            <h1>Ready orders here:</h1>
            {ready.length===0 ? <h3>No ready orders at this time</h3> : ready.map(o=>{
                return(
                <div key={o.id}>
                    <br/>
                    <p>ORDER#{o.id}</p>
                    <p>NAME: {o.lname}, {o.fname}</p>
                    <p>ENTREE: {o.entree}</p>
                    <p>APPETIZER: {o.appetizer}</p>
                    <p>DRINK: {o.drink}</p>
                    <p>COMMENTS: {o.comments}</p> 
                </div>  
            )}) }
        </div>
    )
}

export default withRouter(Ready)
