import React from 'react'
import './InputQuestion.css'

const SelectQuestion = (props) => {
    return (
        <div className="question">
            <label className="label">{props.label}
                {props.required ? <span className="star"> *</span> : null}
            </label>
            <select className="input">
                {
                    props.options.map((option)=>{
                        return <option value={option}>{option}</option>
                    })
                }
            </select>
        </div>
    )
}

export default SelectQuestion