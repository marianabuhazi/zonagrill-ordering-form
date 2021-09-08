import React, { useState } from 'react'
import {withRouter} from 'react-router-dom'
import submitted from './Submitted'
// import { VALIDATOR_REQUIRE, VALIDATOR_EMAIL } from '../util/Validators.js';
import './OrderForm.css'

const OrderForm = (props) => {
    const [email, setEmail] = useState();
    const [fname, setFName] = useState();
    const [lname, setLName] = useState();
    const [appetizer, setAppetizer] = useState();
    const [entree, setEntree] = useState();
    const [drink, setDrink] = useState();
    const [comments, setComments] = useState();

    const confirmation = ()=>{
        submitted.submit(()=>{
            props.history.push("/confirmation")
        })
    }
    
    const submitOrder = (e) =>{
        e.preventDefault()
        let newOrder={
            'id':1,
            'email':email,
            'fname':fname,
            'lname':lname,
            'appetizer':appetizer,
            'entree':entree,
            'drink':drink,
            'comments':comments
        }
        if(email===undefined || fname===undefined || lname===undefined || appetizer===undefined || entree===undefined || drink===undefined){
            alert("somethings wrong")
        }
        else{
            console.log(newOrder)
            props.setOrder(newOrder)
            confirmation()
        }
        
    }
    return (
        <div>
            <form className="form">
            <div className="question">
                <label className="label">
                    eMail
                    <span className="star"> *</span>
                </label>
                <input className="input" type="text" onChange={e=>setEmail(e.target.value)}></input>
            </div>
            <div className="question">
                <label className="label">
                    First Name
                    <span className="star"> *</span>
                </label>
                <input className="input" type="text" onChange={e=>setFName(e.target.value)}></input>
            </div>
            <div className="question">
                <label className="label">
                    Last Name
                    <span className="star"> *</span>
                </label>
                <input className="input" type="text" onChange={e=>setLName(e.target.value)}></input>
            </div>
            <div className="question">
                <label className="label">
                    Choose an appetizer
                    <span className="star"> *</span>
                </label>
                <select className="input" onChange={e=>setAppetizer(e.target.value)}>
                    {
                        ["","None", "Hot Dog", "Tequeños"].map((option)=>{
                            return <option key={option}>{option}</option>
                        })
                    }
                </select>
            </div>
            <div className="question">
                <label className="label">
                    Choose an entree
                    <span className="star"> *</span>
                </label>
                <select className="input" onChange={e=>setEntree(e.target.value)}>
                    {
                        ["","None", "Pepito", "Arepa", "Burger", "Cachapa"].map((option)=>{
                            return <option key={option}>{option}</option>
                        })
                    }
                </select>
            </div>
            <div className="question">
                <label className="label">
                    Choose an drink
                    <span className="star"> *</span>
                </label>
                <select className="input" onChange={e=>setDrink(e.target.value)}>
                    {
                        ["","None", "Fresscolita", "Coca Cola", "Malta", "Sprite"].map((option)=>{
                            return <option key={option}>{option}</option>
                        })
                    }
                </select>
            </div>
            <div className="question">
                <label className="label">
                    Comments
                </label>
                <input className="input" type="text" onChange={e=>setComments(e.target.value)}></input>
            </div>
            <button className="submit" onClick={submitOrder}>Submit</button> 
        </form>
        </div>
    )
}

export default withRouter(OrderForm)
