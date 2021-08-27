import React from 'react'
import Header from './OrderHeader'
import InputQuestion from './InputQuestion'
import SelectQuestion from './SelectQuestion'
import './Order.css'

const Order = () => {
    return (
        <div>
        <Header name="Thermofisher Corporate Event"/>
        <form className="form">
            <InputQuestion required label="First name:" />
            <InputQuestion required label="Last name:" />
            <SelectQuestion required label="Choose an appetizer:" options={["None", "Hot Dog", "Tequeños"]}/>
            <SelectQuestion required label="Choose an èntree:" options={["None", "Pepito", "Arepa", "Burger", "Cachapa"]}/>
            <SelectQuestion required label="Choose a drink:" options={["None", "Fresscolita", "Coca Cola", "Malta", "Sprite"]}/>
            <InputQuestion label="Comments:" />
            <button className="submit">Submit</button>
        </form>
        </div>
    )
}

export default Order
