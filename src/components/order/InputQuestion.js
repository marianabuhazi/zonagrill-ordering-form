import React from 'react'
import './InputQuestion.css'

const InputQuestion = (props) => {
    return (
        <div className="question">
            <label className="label">{props.label}
                {props.required ? <span className="star"> *</span> : null}
            </label>
            <input className="input" type="text"></input>
        </div>
    )
}

export default InputQuestion
