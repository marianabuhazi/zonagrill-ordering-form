import React, {useState} from 'react'
// import { validate } from '../../util/Validators.js';
import './Question.css'

const Question = (props, {setState}) => {
    const [order, setOrder] = useState({
            id:1,
            fname:"",
            lname:"",
            appetizer:"",
            entree:"",
            drink:"",
            comments:""
    })
    // const [valid, setValid] = useState(false)

    // setValid(validate(order[props.qType],props.validators))

    const changeHandler = (e) => {
        setOrder({
            ...order,
            [props.qType]:e.target.value
        })
    }
    return (
        <div className="question">
            <label className="label">{props.label}
                {props.required ? <span className="star"> *</span> : null}
            </label>

            {props.select ? 
            <select className="input" onChange={changeHandler}>
                {
                    props.options.map((option)=>{
                        return <option key={option} value={option}>{option}</option>
                    })
                }
            </select> 
            : 
            <input className="input" type="text" onChange={changeHandler}></input>}
        </div>
    )
}

export default Question
