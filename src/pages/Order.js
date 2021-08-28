import React from 'react'
import Header from '../components/order/OrderHeader'
import Question from '../components/order/Question'
import { VALIDATOR_REQUIRE, VALIDATOR_EMAIL } from '../util/Validators.js';
import './Order.css'

const Order = () => {
    return (
        <div>
        <Header name="Thermofisher Corporate Event"/>
        <form className="form">
            <Question required qType="email" label="eMail:" validators={[VALIDATOR_EMAIL()]}/>
            <Question required qType="fname" label="First name:"  validators={[VALIDATOR_REQUIRE()]}/>
            <Question required qType="lnam" label="Last name:" validators={[VALIDATOR_REQUIRE()]}/>
            <Question required qType="appetizer" select label="Choose an appetizer:" options={["","None", "Hot Dog", "Tequeños"]} />
            <Question required qType="entree" select label="Choose an èntree:" options={["","None", "Pepito", "Arepa", "Burger", "Cachapa"]} />
            <Question required qType="drink" select label="Choose a drink:" options={["","None", "Fresscolita", "Coca Cola", "Malta", "Sprite"]} />
            <Question label="Comments:" qType="comments"/>
            <button className="submit">Submit</button> 
        </form>
        </div>
    )
}

export default Order
